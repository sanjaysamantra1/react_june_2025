import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HttpDemo4() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response);
            setUsers([...response.data]);
        } catch (err) {
            console.log('Something went wrong...', err)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, []);

    return <>
        <h3 className='text-center'>Fetch Data from API using fetch() & async-await </h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {users.map((user) => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.city}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
