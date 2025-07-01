import React from 'react';
import './body.css';
import Demo1 from '../demo1/Demo1';
import Greet from '../greet/Greet';
import MyModal from '../myModal/MyModal';
import ConditionalDemo1 from '../conditional_rendering/ConditionalDemo1';
import ListDemo1 from '../List/ListDemo1';
import ListDemo2 from '../List/ListDemo2';
import UserList from '../List/UserList';
import StateDemo1 from '../state/StateDemo1';
import CounterDemo1 from '../state/CounterDemo1';
import CounterDemo2 from '../state/CounterDemo2';
import ProductList from '../products/ProductList';
import Users from '../users/Users';
import StateAssignment1 from '../state/StateAssignment1';
import StateAssignment2 from '../state/StateAssignment2';
import EmployeeList from '../employees/EmployeeList';
import EventDemo1 from '../events/EventDemo1';
import EventDemo2 from '../events/EventDemo2';

export default function Body() {
  let msg1 = 'Good Afternoon';
  let msg2 = 'Good Evening';

  return (
    <div className='body'>
      {/* <Demo1 /> */}
      {/* <Greet name='sidhant' msg={msg1} />
      <Greet name='sanjay' msg={msg2} />
      <Greet name='bharat' />
      <Greet name='sachin'>
        <h3>This Content is from parent component</h3>
      </Greet> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <UserList /> */}
      {/* <StateDemo1/> */}
      {/* <CounterDemo1/> */}
      {/* <CounterDemo2/> */}
      {/* <Users/> */}
      <ProductList/>
      {/* <StateAssignment1/> */}
      {/* <StateAssignment2/> */}
      {/* <EmployeeList/> */}
      {/* <EventDemo2 /> */}
    </div>
  )
}
