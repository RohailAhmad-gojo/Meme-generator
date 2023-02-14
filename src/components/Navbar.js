import React from 'react'
import "../App.css"
import logo from "../Assets/logo2.png"

function Navbar() {
  return (
    <div className='navbar-conatiner'>
        <div className='navbar-logo'>
            <img src={logo} alt='Logo'/>
            <h3>Meme Genterator</h3>
        </div>
        <div className='navbar-list'><h3>React Course - Project 3</h3></div>
    </div>
  )
}

export default Navbar