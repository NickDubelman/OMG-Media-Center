import React from 'react'
import { Link } from 'react-router'
import { createDropdownItems } from '/imports/utils'

import Dropdown from '/imports/components/Dropdown'

const logo={
  height: 135,
  paddingTop: 10,
}

export default function Navbar({menuItems, theme}){
  return(
    <div id='regularNavbar'>
      <Link to='/taylor'>
      <img 
        src='https://custom-portal-theme-assets.s3.amazonaws.com/5755b6ffe4b0060dcc3c0098tf-media-center.png?1465507096526'
        style={logo} />
      </Link>
      <div className='navLinks'>
        { createDropdownItems(menuItems, theme) }
      </div>
    </div>
  )
}
