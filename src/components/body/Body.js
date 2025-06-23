import React from 'react';
import './body.css';
import Demo1 from '../demo1/Demo1';
import Greet from '../greet/Greet';

export default function Body() {
  let msg = 'Good Morning';

  return (
    <div className='body'>
      {/* <Demo1 /> */}
      <Greet name='sidhant' msg={msg} />
      <Greet name='sanjay' msg={msg} />
      <Greet name='sidharth' msg={msg} />
    </div>
  )
}
