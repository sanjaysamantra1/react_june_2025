import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/11980ec333f6aa03.jpg?q=60" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/78c3cfa787e8acbe.jpg?q=60" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/ff79341b24d091cd.jpg?q=60" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
