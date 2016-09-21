import React, { Component } from 'react'

export default class Spinner extends Component{
  constructor(props){
    super(props)
    let color = props.color
    this.loaderStyle={
      fontSize: '10px',
      margin: '50px auto',
      textIndent: '-9999em',
      width: '11em',
      height: '11em',
      borderRadius: '50%',
      background: '#ffffff',
      background: '-moz-linear-gradient(left, ' + color + ' 10%, rgba(255, 255, 255, 0) 42%)',
      background: '-webkit-linear-gradient(left, ' + color + ' 10%, rgba(255, 255, 255, 0) 42%)',
      background: '-o-linear-gradient(left, ' + color + ' 10%, rgba(255, 255, 255, 0) 42%)',
      background: '-ms-linear-gradient(left, ' + color + ' 10%, rgba(255, 255, 255, 0) 42%)',
      background: 'linear-gradient(to right, ' + color + ' 10%, rgba(255, 255, 255, 0) 42%)',
      position: 'relative',
      WebkitAnimation: 'load3 1.4s infinite linear',
      animation: 'load3 1.4s infinite linear',
      WebkitTransform: 'translateZ(0)',
      MsTransform: 'translateZ(0)',
      transform: 'translateZ(0)',      
    }
    this.loaderBefore={
      width: '50%',
      height: '50%',
      background: color,
      borderRadius: '100% 0 0 0',
      position: 'absolute',
      top: 0,
      left: 0,
      content: '',       
    }
  }
  render(){
    return(
      <div style={this.loaderStyle}>
        <div style={this.loaderBefore} />
        Loading...
        <div style={loaderAfter} />
      </div>
    )
  }
}

let loaderAfter = {
  background: '#ffffff',
  width: '75%',
  height: '75%',
  borderRadius: '50%',
  content: '',
  margin: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}