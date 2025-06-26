import React from 'react';
// import userArr from './users.json';
import userArr from './users.js';

export default function UserList() {
    return <>
        <h2 className="text-center">User List</h2>
        <table className='table table-bordered table-striped'>
            <tbody>
                {userArr.map((user) => {
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
