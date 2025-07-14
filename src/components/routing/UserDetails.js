import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    let { id } = useParams();
    return <>
        <h3 className='text-center'> This is User Details Page - {id}</h3>
    </>
}
