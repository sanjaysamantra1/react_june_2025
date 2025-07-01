import React from 'react'

function Greet({name, msg = 'Good Morning'}) {
    return <>
        {console.log('Greet Render...')}
        <h3>This is Greet Component</h3>
        <div>Hello {name} , {msg}</div>
    </>
}

export default React.memo(Greet);
