import React from 'react';
import './body.css';
import Demo1 from '../demo1/Demo1';
import Greet from '../greet/Greet';
import MyModal from '../myModal/MyModal';
import ConditionalDemo1 from '../conditional_rendering/ConditionalDemo1';
import ListDemo1 from '../List/ListDemo1';
import ListDemo2 from '../List/ListDemo2';

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
      <ListDemo2 />
    </div>
  )
}
