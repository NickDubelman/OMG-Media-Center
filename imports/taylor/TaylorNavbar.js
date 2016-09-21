import React from 'react'
import { Link } from 'react-router'

import Dropdown from '/imports/components/Dropdown'

import menuItemsRoot from '/imports/taylor/menuItems'

const logo={
  height: 135,
  paddingTop: 10,
}

export default function Navbar(){
  return(
    <div id='regularNavbar'>
      <Link to='/taylor'>
      <img 
        src='https://custom-portal-theme-assets.s3.amazonaws.com/5755b6ffe4b0060dcc3c0098tf-media-center.png?1465507096526'
        style={logo} />
      </Link>
      <div className='navLinks'>
        { createDropdownItems(menuItemsRoot.subitems) }
      </div>
    </div>
  )
}

function createDropdownItems(items){
  return(
    items.map((item, i)=>(
      <Dropdown 
        key={i} label={item.label} 
        id={item.id} subitems={item.subitems}
        eldest={item.eldest} />
    ))
  )
}

