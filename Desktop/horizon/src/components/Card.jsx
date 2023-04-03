import React from 'react'

export default function Card({imgUrl, name}) {
  return (
    <div>
           <div class="col-md-3">
          <div class="card wow animate__animated animate__bounceIn animate__slow" style={{width: 300}}>
            <img src={imgUrl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
