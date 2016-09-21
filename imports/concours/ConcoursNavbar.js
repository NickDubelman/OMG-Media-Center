import React from 'react'
import { Link } from 'react-router'

import Dropdown from '/imports/components/Dropdown'

import menuItemsRoot from '/imports/taylor/menuItems'

const logo={
  height: 50,
  marginTop: 40,
  marginBottom: 40,
}

export default function Navbar(){
  return(
    <div id='regularNavbar'>
      <Link to='/concours'>
      <img 
        src='https://dmc_new.s3.amazonaws.com/concours-5918c5e55ddf7aac/logo/11/original/concours-logo.png?1390520733548'
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

