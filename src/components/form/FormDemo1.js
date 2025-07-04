import React, { useState } from 'react'

export default function FormDemo1() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const changeHandler = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (fieldName === 'num1') {
            setNum1(fieldValue)
        } else {
            setNum2(fieldValue)
        }
        console.log('change Handler');
    }
    return <>
        <h3>Let's Learn Controlled form</h3>
        <form className='border border-3 rounded-3 p-3'>
            Num1:
            <input name="num1" value={num1} onChange={changeHandler} /> <br />
            Num2:
            <input name="num2" value={num2} onChange={changeHandler} />
            <br /><br />
            <button>submit</button>
        </form>

        <p>Addition is: {+num1 + +num2}</p>
    </>
}
