import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
<NavLink exact activeClassName="Hmm" to="/">Home</NavLink>
<NavLink exact activeClassName="Hmm" to="/About">About Us</NavLink>

    </>
  )
}

export default Menu