import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr'

import FolderAssets from './FolderAssets'
import Navbar from './Navbar'

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
