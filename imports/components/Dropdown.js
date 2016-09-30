import React, { Component } from 'react'
import { Link }  from 'react-router'

export default class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {open: false}
    this.handleHover = this.handleHover.bind(this)
    this.handleDehover = this.handleDehover.bind(this)
  }
  handleHover(){
    this.setState({open: true})
  }
  handleDehover(){
    this.setState({open: false})
  }
  render(){
    let {label, id, subitems, eldest, slug, theme} = this.props
    let hoverStyling
    if(eldest){
      if (this.state.open){
        hoverStyling = {
          backgroundColor: theme.primaryColor,
          color: theme.buttonFontColor
        }
      }
      return(
        <div className='dropdown' onMouseLeave={this.handleDehover}>
          <button onMouseOver={this.handleHover} className="dropbtn" style={{...theme.dropdownStyle, ...hoverStyling}}>{label}</button>
          {this.state.open ? (
            <div className='dropdown-content'>
              {subitems ? 
                subitems.map((item, i) => 
                  <Dropdown key={i} label={item.label} 
                    id={item.id} subitems={item.subitems} 
                    slug={slug} handleDehover={this.handleDehover} />)
              : null }
            </div> ) 
          : null }       
        </div>
      )
    }
    if(id){
      return(
        <Link onClick={this.props.handleDehover} to={'/'+slug+'/folder/'+id} >
          {label}
        </Link>)
    }
    if(label && subitems){
      return(
        <div className='submenu-content' onMouseOver={this.handleHover} onMouseLeave={this.handleDehover}>
          <p className='dropdown-item'>
            <i className="fa fa-caret-left moreArrow" aria-hidden="true"></i>
            {label}
          </p>
          {this.state.open ? (
            <div className='dropdown-content'>
              {subitems ? 
                subitems.map((item, i) => <Dropdown key={i} label={item.label} id={item.id} subitems={item.subitems} slug={slug} handleDehover={this.props.handleDehover} />)
              : null
              }
            </div> ) 
          : null }
        </div>
      )
    }  
  }
}