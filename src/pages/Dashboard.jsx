import React from 'react';
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard page</h1>
      <Link to="/">see Home page</Link>
    </div>
  )
}
