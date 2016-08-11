import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'

import FolderAssets from '/imports/components/FolderAssets'
import Navbar from '/imports/components/Navbar'

export default class App extends Component{
  render(){
    return(
      <div className='container'>
        <Navbar />
        {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
      </div>
    )
  }
}
