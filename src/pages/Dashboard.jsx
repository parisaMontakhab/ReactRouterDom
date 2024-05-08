import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div id='dashboard'>
      <div id='sidebar'>
        <NavLink to="/profile">
       Profile
        </NavLink>

        <NavLink to="/payments">
       Payment
        </NavLink>

      </div>
      <Outlet/>
       
    </div>
  )
}
