import React from 'react'
import { Link } from 'react-router'
import { createDropdownItems } from '/imports/utils'

import Dropdown from '/imports/components/Dropdown'

import menuItemsRoot from '/imports/taylor/menuItems'

const logo={
  height: 50,
  marginTop: 40,
  marginBottom: 40,
}

export default function Navbar({menuItems, theme}){
  const slug = 'concours'
  return(
    <div id='regularNavbar'>
      <Link to='/concours'>
      <img 
        src='https://dmc_new.s3.amazonaws.com/concours-5918c5e55ddf7aac/logo/11/original/concours-logo.png?1390520733548'
        style={logo} />
      </Link>
      <div className='navLinks'>
        { createDropdownItems(menuItems, slug, theme) }
      </div>
    </div>
  )
}