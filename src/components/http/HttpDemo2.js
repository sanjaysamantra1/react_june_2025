import React, { useEffect, useState } from 'react'

export default function HttpDemo2() {
    const [users, setUsers] = useState([]);

    function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => {
                response.json().then(finalResponse => {
                    setUsers([...finalResponse])
                })
            }
        );
    }
    useEffect(() => {
        fetchUsers()
    }, []);

    return <>
        <h3 className='text-center'>Fetch Data from API using fetch() </h3>
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
