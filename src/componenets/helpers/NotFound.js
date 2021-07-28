import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center mt-4">
      <h1 className="text-danger">Oops! The page is not found</h1>
      <div>
        <img src="./images/notfound.jpg" alt="Not found" />
      </div>
      <Link className=" btn btn-outline-primary my-3" to="/">Home</Link>
    </div>
  )
}
