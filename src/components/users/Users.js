import React from 'react';
import userArr from './users.json';

export default function Users() {
    let columns = Object.keys(userArr[0]);
    return <>
        <h2 className="text-center">User List</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    {columns.map((column, ind) => {
                        return <th key={ind}>{column}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {userArr.map((user) => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
