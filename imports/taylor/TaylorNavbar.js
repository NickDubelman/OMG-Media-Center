import React from 'react'
import { Link } from 'react-router'
import { createDropdownItems } from '/imports/utils'

import Dropdown from '/imports/components/Dropdown'

export default function Navbar({menuItems, slug, theme}){
  return(
    <div id='regularNavbar'>
      <Link to={'/'+slug}>
      <img 
        src={theme.logo}
        style={theme.logoStyle} />
      </Link>
      <div className='navLinks'>
        { createDropdownItems(menuItems, slug, theme) }
      </div>
    </div>
  )
}
