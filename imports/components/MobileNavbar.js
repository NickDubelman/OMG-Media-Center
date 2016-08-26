import React, { Component } from 'react'
import { Nav, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class MobileNavbar extends Component{
  constructor(props){
    super(props)
    this.state = {menuOpen: false}
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this)
    this.createDropdownItems = this.createDropdownItems.bind(this)
    this.dropdownContent
  }
  toggleMenuOpen(){
    this.setState({menuOpen: !this.state.menuOpen})
  }
  createDropdownItems(items, level){
    return(items.map((subitem, i)=>{
      if(subitem.subitems){
        level++
        return(
          <NavDropdown style={listItem} key={'NavDropdown-'+subitem.label+'-'+i} title={subitem.label} id={subitem.label+'-dropdown'}>
            {this.createDropdownItems(subitem.subitems, level--)}
          </NavDropdown>
        )
      }
      return(
        <LinkContainer style={indentStyle(level)} onClick={this.toggleMenuOpen} to={'/taylor/folder/'+subitem.id} key={'menuItem'+subitem.label+'-'+i}>
          <MenuItem>{subitem.label}</MenuItem>
        </LinkContainer>
      )
    }))
  }
  componentWillMount(){
    this.dropdownContent = (
      <div className='navbar-collapse collapse in' style={customCollapse}>
        <ul className='nav navbar-nav navbar-right'>
          {this.props.menuItems.map((item,i)=>(
            <NavDropdown key={'NavDropdown-'+item.label+'-'+i} title={item.label} id={item.label+'-dropdown'}>
              {this.createDropdownItems(item.subitems, 1)}
            </NavDropdown>
          ))}
        </ul>
      </div>
    )
  }
  render(){
    return(
      <nav id='mobileNavbar' className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <Link style={{fontSize: '1.3em'}} className='navbar-brand' to='/taylor'>Taylor Farms Media Center</Link>
            <button className='navbar-toggle collapsed' onClick={this.toggleMenuOpen}>
              <span className='sr-only'>Toggle Navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>
          {this.state.menuOpen ? this.dropdownContent : null }
        </div>
      </nav>
    )
  }
}

let customCollapse={
  marginRight: 0,
  position: 'absolute',
  zIndex: 1,
  right: 0,
  left: 0,
  paddingLeft: 30,
  background: 'white',
  borderBottom: '2px solid #e7e7e7'
}

let listItem={
  display: 'list-item'
}

function indentStyle(level){
  return{
    marginLeft: --level*10
  }
}

export default MobileNavbar