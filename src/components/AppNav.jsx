import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AppNav() {
  return (
    <div>
          <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Post</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </ul>
  </nav>
    </div>
  )
}
