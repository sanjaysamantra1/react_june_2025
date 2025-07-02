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
  function closeModal() {
    setIsOpen(false);
  }

  return <>
    <div className='container text-center border border-2 rounded-3'>
      <div className='row'>
        <h3>Employee CRUD Example</h3>
      </div>
      <div className='row border'>
        <div className='col-sm-8'>
          <EmployeeTable employees={employees} openModal={openModal}>
          </EmployeeTable>
        </div>
        <div className='col-sm-4'>
          <EmployeeAdd></EmployeeAdd>
        </div>
      </div>
    </div>
  </>
}
