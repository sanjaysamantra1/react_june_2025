import React from 'react'

export default function StateDemo1() {
    let name = 'Virat Kohli'; // Local Variables
    let count = 0;
    const increment = ()=>{
        count++;
        console.log(count);
    }
    return <>
        <h2>State Demo 1</h2>
        <div>Count value is: {count}</div>
        <button onClick={increment}>Increment</button>
        <div>Name : {name}</div>
    </>
}
