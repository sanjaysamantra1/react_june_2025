import React, { useState } from 'react'

export default function StateAssignment1() {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag);
    }
    return <>
        {flag ? <h1>Hellooooo, Good Morning</h1> : ''}
        <button className='btn btn-primary' onClick={toggleFlag}>
            {flag ? 'Hide' : 'Show'}
        </button>
    </>
}
