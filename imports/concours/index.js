import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'

import ConcoursNavbar from '/imports/concours/ConcoursNavbar'
import MobileNavbar from '/imports/concours/MobileNavbar'

import ConcoursHomepage from '/imports/concours/ConcoursHomepage'
import ConcoursFolderAssets from '/imports/concours/ConcoursFolderAssets'

import menuItemsRoot from '/imports/taylor/menuItems'

export default class App extends Component{
  render(){
    return(
      <div> 
        <MobileNavbar menuItems={menuItemsRoot.subitems} />
        <div className='container'>
          <ConcoursNavbar />
          {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
        </div>
      </div>
    )
  }
}

export { ConcoursHomepage, ConcoursFolderAssets }