import React, { useRef } from 'react'

export default function UseRefDemo1() {
    const myRef1 = useRef('');
    const myRef2 = useRef('');

    const submitMyForm = (e) => {
        e.preventDefault();
        const val1 = myRef1.current.value;
        const val2 = myRef2.current.value;
        console.log(`Addition of ${val1} & ${val2} is ${+val1 + +val2}`)
    }
    return <div className='text-center col-sm-4 offset-4'>
        <h3>Let's Learn useRef Hook</h3>

        <form className='border border-3 rounded-3 p-3' onSubmit={submitMyForm}>
            Num1:
            <input name="fname" ref={myRef1} /> <br />
            Num2:
            <input name="lname" ref={myRef2} />
            <br /><br />
            <button>submit</button>
        </form>
    </div>
}
