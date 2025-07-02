import React, { useState } from 'react';
import Modal from 'react-modal';

import employeeArr from './employees.json'
import EmployeeTable from './Employee_table';
import EmployeeAdd from './Employee_add';

export default function Employee_crud() {
  const [employees, setEmployees] = useState(employeeArr);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (currentEmp) => {
    setSelectedEmployee({ ...currentEmp });
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  const deleteEmployee = (empIdToDelete) => {
    const deleteFlag = window.confirm('Are You Sure to delete the employee');
    if (deleteFlag) {
      let employeesAfterDelete = employees.filter(emp => emp.eId !== empIdToDelete);
      setEmployees([...employeesAfterDelete]);
    }
  }
  const addEmployee = (empToAdd) => {
    setEmployees([...employees, empToAdd]);
  }

  return <>
    <div className='container text-center border border-2 rounded-3'>
      <div className='row'>
        <h3>Employee CRUD Example</h3>
      </div>
      <div className='row border'>
        <div className='col-sm-8'>
          <EmployeeTable employees={employees} openModal={openModal}
            deleteEmployee={deleteEmployee}>
          </EmployeeTable>
        </div>
        <div className='col-sm-4'>
          <EmployeeAdd addEmployee={addEmployee}></EmployeeAdd>
        </div>
      </div>

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
    </div>
  </>
}
