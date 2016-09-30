import React from 'react'
import { Link } from 'react-router'

import Dropdown from '/imports/components/Dropdown'

import menuItemsRoot from '/imports/taylor/menuItems'

export default function Navbar({menuItems, theme}){
  const slug = 'concours'
  return(
    <div id='regularNavbar'>
      <Link to='/concours'>
      <img 
        src='https://dmc_new.s3.amazonaws.com/concours-5918c5e55ddf7aac/logo/11/original/concours-logo.png?1390520733548'
        style={styles.logo} />
      </Link>
      <div style={styles.navLinks} >
        <Link to='/concours/gallery/photos'>
          <button style={styles.button}>2016 Media for Download</button>
        </Link>
        <Link to='/concours/folder/335a8dc8-5811-4655-aa03-a9d9cc2ab3f9'>
          <button style={styles.button}>Press Kit</button>
        </Link>
        <Link to='/concours/gallery/2012'>
          <button style={styles.button}>Archive</button>
        </Link>        
      </div>
    </div>
  )
}

const styles={
  logo: {
    height: 45,
    marginTop: 30,
    marginBottom: 20,
  },
  navLinks: {
    display: 'inline',
    float: 'right',
    marginTop: 38, 
  },
  button: {
    cursor: 'pointer',
    padding: 10,
    fontSize: 18,
    border: 'solid black 1px',
    fontFamily: 'BenchNine',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginRight: 6,
    outline: 'none'
  }
}