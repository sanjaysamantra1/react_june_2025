import React from 'react';
import './body.css';
import Demo1 from '../demo1/Demo1';
import Greet from '../greet/Greet';
import MyModal from '../myModal/MyModal';

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
      {/* <MyModal>
        <form action="/action_page.php">
          <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </MyModal> */}
      <MyModal>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>1</td>
              <td>100</td>
              <td>sanjay</td>
              <td>abcdef</td>
            </tr>
          </tbody>
        </table>
      </MyModal>
    </div>
  )
}
