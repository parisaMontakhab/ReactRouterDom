import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div>
          <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Post</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
    </div>
  )
}
