import React from 'react'

export default function Carousel() {
  return (
    <div>

    <div id="carouselExampleControls" class="carousel slide wow animate__animated animate__slideInUp" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/carou1.jpeg" className="carou d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="img/carou1.jpeg" class="carou d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="img/carou3.webp" class="carou d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}
