import React from 'react'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div>
        <AppNav/>
        <Outlet/>
        <footer style={{marginTop:150}}> This is footer</footer>
    </div>
  )
}
