import React from 'react';
import productsArr from './products.json';

export default function ProductList() {
    return <>
        <h3 className="text-center">Product List</h3>

        <div className='container'>
            <div className='row my-1'>
                {productsArr.map((product) => {
                    return <div className='col-sm-3'>
                        <div class="card">
                            <img src={product.image} class="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div class="card-body text-center">
                                <h5 class="card-title">{product.category}</h5>
                                <p class="card-text text-truncate">{product.title}</p>
                                <p class="card-text text-truncate">{product.description}</p>
                                <p class="card-text">Price: Rs.{product.price}</p>
                                <p class="card-text">
                                    {product.rating.rate}
                                    <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                                    ({product.rating.count})
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}