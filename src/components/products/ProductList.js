import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import productsArr from './products.json';
import "./productlist.css"

export default function ProductList() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const filteredProducts = productsArr.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productsArr.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsArr.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return <>
        <h3 className="text-center">Product List</h3>

        <div className='container'>
            <div className='row my-1'>
                {filteredProducts.map((product) => {
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
            <div className='row'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    </>
}