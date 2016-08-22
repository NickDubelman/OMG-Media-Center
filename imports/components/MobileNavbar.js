import React from 'react'
import { Nav, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const MobileNavbar = ({menuItems}) => (
  <Navbar id='mobileNavbar'>
  	<Navbar.Header>
  		<Navbar.Brand>
  			Taylor Farms Media Center
  		</Navbar.Brand>
  		<Navbar.Toggle />
  	</Navbar.Header>
  	<Navbar.Collapse style={{fontSize: 10}}>
  		<Nav pullRight>
        {menuItems.map((item,i)=>(
          <NavDropdown key={'NavDropdown-'+item.label+'-'+i} title={item.label} id={item.label+'-dropdown'}>
            {createDropdownItems(item.subitems)}
          </NavDropdown>
        ))}
  		</Nav>
  	</Navbar.Collapse>
  </Navbar>
)

function createDropdownItems(items, indent){
  return(items.map((subitem, i)=>{
    if(subitem.subitems){
      if(indent){
        return(
          <NavDropdown style={{...listItem, ...indentedItem}} key={'NavDropdown-'+subitem.label+'-'+i} title={subitem.label} id={subitem.label+'-dropdown'}>
            {createDropdownItems(subitem.subitems, true)}
          </NavDropdown>
        )
      }
      return(
        <NavDropdown style={listItem} key={'NavDropdown-'+subitem.label+'-'+i} title={subitem.label} id={subitem.label+'-dropdown'}>
          {createDropdownItems(subitem.subitems, true)}
        </NavDropdown>
      )
    }
    if(indent){
      return(
        <LinkContainer to={'/taylor/folder/'+subitem.id} key={'menuItem'+subitem.label+'-'+i}>
          <MenuItem style={indentedItem} key={'menuItem'+subitem.label+'-'+i}>{subitem.label}</MenuItem>
        </LinkContainer>
      )
    }
    return(
      <LinkContainer to={'/taylor/folder/'+subitem.id} key={'menuItem'+subitem.label+'-'+i}>
        <MenuItem>{subitem.label}</MenuItem>
      </LinkContainer>
    )
  }))
}

let listItem={
  display: 'list-item'
}

let indentedItem = {
  marginLeft: 15
}

export default MobileNavbar