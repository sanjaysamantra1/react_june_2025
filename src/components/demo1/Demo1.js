import React from 'react';
import add, { sub } from './math.js';

export default function Demo1() {
    console.log(React)
    add(10, 20);
    sub(20,10)
    return (
        <>
            <div>This is Demo1 Component</div>
            <div>React Version is {React.version}</div>
        </>
    )
}
