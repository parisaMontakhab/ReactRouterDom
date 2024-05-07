import React from 'react'
import { Link } from 'react-router-dom'

export default function Posts() {
  return (
    <div>
        <h1>Posts page</h1>
        <Link to="/dashboard">see Dashboard page</Link>
    </div>
  )
}
