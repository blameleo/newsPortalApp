import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-md navbar-light px-3 bg-warning">
      <a href="" class="navbar-brand">  PIZZAMANIA</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#test"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="test">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <a href="" class="nav-link active">Home</a>
          </li>
          <li class="nav-item"><a href="" class="nav-link">About</a></li>
          <li class="nav-item"><a href="" class="nav-link">Pizza Types</a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
