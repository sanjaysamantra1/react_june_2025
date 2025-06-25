import React from 'react'

export default function ConditionalDemo1() {
    let num = 4;
    let isLoggedIn = true;

    /* if (num % 2 === 0) {
        return <div>{num} is Even</div>
    } else {
        return <div>{num} is Odd</div>
    }
 */
    /* return <>
        <h2>{num % 2 === 0 ? `${num} is Even` : `${num} is Odd`} </h2>
    </> */

   /*  switch (num) {
        case 1: return <div>Monday</div>; break;
        case 2: return <div>Tuesday</div>; break;
        case 3: return <div>Wednesday</div>; break;
        case 4: return <div>Thursday</div>; break;
        case 5: return <div>Friday</div>; break;
        case 6: return <div>Saturday</div>; break;
        case 7: return <div>Sunday</div>; break;
        default: return <div>Not a valid number</div>
    } */

    return <div>{isLoggedIn && <button className='btn btn-danger'>Logout</button>}</div>
}
