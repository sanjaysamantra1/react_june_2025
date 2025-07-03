import React, { useEffect, useState } from 'react'

export default function CounterDemo2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    useEffect(
        () => {
            console.log('useEffect Called...');
        }
    );

    return <div className='border border-5 rounded-3 p-2 text-center'>
        {console.log('Render...')}
        <h2>Counter example using state</h2>
        <div>Count value is: {count}</div>
        <button onClick={increment}>Increment</button>
    </div>
}
