import React, { useState } from 'react';
import './body.css';
import Demo1 from '../demo1/Demo1';
import Greet from '../greet/Greet';
import MyModal from '../myModal/MyModal';
import ConditionalDemo1 from '../conditional_rendering/ConditionalDemo1';
import ListDemo1 from '../List/ListDemo1';
import ListDemo2 from '../List/ListDemo2';

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
import PureDemo1 from '../pure_component/PureDemo1';
import PureDemo2 from '../pure_component/PureDemo2';
import Employee_crud from '../employees/Employee_crud';
import UseEffectDemo1 from '../hooks/UseEffectDemo1';
import UseRefDemo1 from '../hooks/UseRefDemo1';
import FormDemo1 from '../form/FormDemo1';
import UseMemoDemo1 from '../hooks/UseMemoDemo1';
import UseCallbackParent from '../hooks/UseCallbackParent';
import FormDemo2 from '../form/FormDemo2';
import FormDemo3 from '../form/FormDemo3';
import HttpDemo1 from '../http/HttpDemo1';
import HttpDemo2 from '../http/HttpDemo2';
import HttpDemo3 from '../http/HttpDemo3';
import HttpDemo4 from '../http/HttpDemo4';
import ToDoList from '../http/TodoList';
import PostList from '../http/PostList';
import HttpDemo5 from '../http/HttpDemo5';
import CounterDemo3 from '../state/CounterDemo3';
import { Route, Routes } from 'react-router-dom';
import Home from '../routing/Home';
import Aboutus from '../routing/Aboutus';
import Careers from '../routing/Careers';
import NotFound from '../routing/NotFound';
import UserDetails from '../routing/UserDetails';
import ProductDetails from '../routing/ProductDetails';
import PermanentJobs from '../routing/PermanentJobs';
import ContractJobs from '../routing/ContractJobs';
import ProtectedRoute from '../routing/ProtectedRoute';
import { Suspense } from 'react';
const UserList = React.lazy(() => import('../List/UserList'));

export default function Body() {
  let msg1 = 'Good Afternoon';
  let msg2 = 'Good Evening';

  const [name, setName] = useState('Sanjay');
  const [add, setAdd] = useState('Bangalore');
  const [cars, setCars] = useState(['Tata', 'Honda', 'Maruti']);

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
      {/* <CounterDemo2/>
      <CounterDemo3/> */}
      {/* <Users/> */}
      {/* <ProductList/> */}
      {/* <StateAssignment1/> */}
      {/* <StateAssignment2/> */}
      {/* <EmployeeList/> */}
      {/* <EventDemo2 /> */}
      {/* <PureDemo2 /> */}
      {/* <Greet name={name} />
      <button onClick={() => setName('Sachin')}>updateName</button>
      <button onClick={() => setAdd('Chennai')} className='mx-2'>updateAdd</button>
      <button onClick={() => setCars([...cars, 'Hundai'])}>updateCarsArray</button> */}
      {/* <Employee_crud></Employee_crud> */}
      {/* <UseEffectDemo1 /> */}
      {/* <UseRefDemo1/> */}
      {/* <FormDemo1/> */}
      {/* <UseMemoDemo1/> */}
      {/* <UseCallbackParent/> */}
      {/* <FormDemo2/> */}
      {/* <FormDemo3 /> */}
      {/* <HttpDemo4 /> */}
      {/* <ToDoList/> */}
      {/* <PostList/> */}
      {/* <HttpDemo5/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/careers" element={<Careers />} >
          <Route index element={<PermanentJobs />} />
          <Route exact path="permanent" element={<PermanentJobs />} />
          <Route exact path="contract" element={<ContractJobs />} />
        </Route>
        <Route exact path="/users" element={<Suspense fallback={<div>Loading...</div>}>
     <UserList />
 </Suspense>} />
        <Route exact path="/userdetails/:id" element={<UserDetails />} />
        <Route exact path="/products" element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        } />
        <Route exact path="/productdetails" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
