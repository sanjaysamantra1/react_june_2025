import React, { useEffect, useState } from 'react';
import client from '../../api';


export default function ToDoList() {
    const [todos, settodos] = useState([]);

    async function fetchtodos() {
        try {
            let response = await client.get('todos');
            console.log(response);
            settodos([...response.data]);
        } catch (err) {
            console.log('Something went wrong...', err)
        }
    }
    useEffect(() => {
        fetchtodos()
    }, []);

    return <>
        <h3 className='text-center'>Fetch Data from API using Axios Instance </h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {todos.map((todo) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
