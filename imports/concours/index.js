import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'

export default class App extends Component{
  render(){
    return(
      <div> 
        <div className='container'>
          {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
        </div>
      </div>
    )
  }
}
