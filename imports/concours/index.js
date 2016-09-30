import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'

import ConcoursNavbar from '/imports/concours/ConcoursNavbar'
import TaylorNavbar from '/imports/taylor/TaylorNavbar'
import MobileNavbar from '/imports/concours/MobileNavbar'
import ConcoursHomepage from '/imports/concours/ConcoursHomepage'
import ConcoursFolderAssets from '/imports/concours/ConcoursFolderAssets'

import menuItemsRoot from '/imports/concours/menuItems'
import ConcoursTheme from './ConcoursTheme'

export default class App extends Component{
  render(){
    return(
      <div> 
        <MobileNavbar menuItems={menuItemsRoot.subitems} />
        <div className='container'>
          <ConcoursNavbar menuItems={menuItemsRoot.subitems} />
          {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
        </div>
      </div>
    )
  }
}

export class ConcoursQuicksite2 extends Component{
  render(){
    return(
      <div> 
        <MobileNavbar menuItems={menuItemsRoot.subitems} />
        <div className='container'>
          <TaylorNavbar menuItems={menuItemsRoot.subitems} theme={ConcoursTheme} slug='concours2' />
          {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
        </div>
      </div>
    )
  }
}

export { ConcoursHomepage, ConcoursFolderAssets }