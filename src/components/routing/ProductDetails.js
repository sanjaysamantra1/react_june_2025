import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function ProductDetails() {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
        console.log(currentParams); // get new values onchange
        console.log(searchParams.get("title"), searchParams.get("price"), searchParams.get("category"));
    }, [searchParams]);

    return <>
        <h3 className='text-center'> This is Produc Details Page</h3>
    </>
}
