import React, { useState } from 'react';
import employeesData from './employees.json'
import Swal from 'sweetalert2'

export default function EmployeeList() {
    const [employees, setEmployees] = useState(employeesData);

    const deleteEmployee = (empIdToDelete) => {
        Swal.fire({
            title: "Do you want to Delete the employee?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let remainingEmployees = employees.filter(emp => emp.eId !== empIdToDelete);
                setEmployees([...remainingEmployees]);

                Swal.fire("Deleted!", "", "success"); // 
            } else if (result.isDenied) {
                Swal.fire(" not deleted", "", "info");
            }
        });
    }

    return <>
        <h3 className='text-center'>Employee List</h3>

        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Genderd</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => {
                    return <tr key={emp.eId}>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td>{emp.gender}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteEmployee(emp.eId)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
