import React, { useState } from 'react';
import employeesData from './employees.json';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import SearchBar from 'react-js-search';

export default function EmployeeList() {
    const [employees, setEmployees] = useState(employeesData);
    const [filteredEmployees, setFilteredEmployees] = useState(employeesData);

    const [selectedEmployee, setSelectedEmployee] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(currentEmployee) {
        setSelectedEmployee({ ...currentEmployee });
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const onSearchClick = () => {

    }

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

        <div className='container'>
            <div className='row'>
                <div className='col col-sm-4 offset-4'>
                    <SearchBar
                        onSearchTextChange={(term, filteredData) => {
                            setFilteredEmployees([...filteredData]);
                        }}
                        onSearchButtonClick={onSearchClick}
                        placeHolderText={"Search here..."}
                        data={employees}
                    />
                </div>
            </div>
        </div>

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
                {filteredEmployees.map((emp) => {
                    return <tr key={emp.eId}>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td>{emp.gender}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteEmployee(emp.eId)}>Delete</button>
                            <button className='btn btn-primary mx-1'
                                onClick={() => openModal(emp)}>View</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>

            <h2>Selected Employee:</h2>
            <div>eId : {selectedEmployee.eId}</div>
            <div>name : {selectedEmployee.name}</div>
            <div>Gender : {selectedEmployee.gender}</div>
            <div>Salary : {selectedEmployee.sal}</div>
        </Modal>
    </>
}
