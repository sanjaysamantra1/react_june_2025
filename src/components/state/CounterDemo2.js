import React, { useState } from 'react'

export default function CounterDemo2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return <div className='border border-5 rounded-3 p-2 text-center'>
        <h2>Counter example using state</h2>
        <div>Count value is: {count}</div>
        <button onClick={increment}>Increment</button>
    </div>
}
