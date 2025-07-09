import React, { useEffect, useState } from 'react'

export default function HttpDemo1() {
    const [users, setUsers] = useState([]);

    function fetchUsers() {
        let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
        console.log(userPromise);

        userPromise.then(
            (response) => {
                console.log(response);
                let responsePromise = response.json();
                responsePromise.then(
                    (finalData) => {
                        console.log(finalData);
                        setUsers([...finalData])
                    },
                    (err) => {
                        console.log(err)
                    }
                )
            },
            (error) => {
                console.log(error);
            }
        )

    }
    useEffect(() => {
        fetchUsers()
    }, []);

    return <>
        <h3>Fetch Data from API </h3>
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
