import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
    return <>
        <h3 className='text-center'>This is Careers Component</h3>
        <hr />
        <div className='row'>
            <div className='col-sm-3'>
                <Link to="permanent" className='m-3'>Permanent Jobs</Link>
                <Link to="contract">Contract Jobs</Link>
            </div>
            <div className='col-sm-9'>
                <Outlet />
            </div>
        </div>
    </>
}
