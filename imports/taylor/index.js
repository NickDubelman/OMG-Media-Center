import React, { Component } from 'react'
import { IndexRoute, Route } from 'react-router'

import TaylorNavbar from '/imports/taylor/TaylorNavbar'
import MobileNavbar from '/imports/taylor/MobileNavbar'
import TaylorHomepage from '/imports/taylor/TaylorHomepage'
import TaylorFolderAssets from '/imports/taylor/TaylorFolderAssets'

import menuItemsRoot from '/imports/taylor/menuItems'
import TaylorTheme from './TaylorTheme'

export default class App extends Component{
  render(){
    return(
      <div>	
        <MobileNavbar menuItems={menuItemsRoot.subitems} />
        <div className='container'>
          <TaylorNavbar menuItems={menuItemsRoot.subitems} theme={TaylorTheme} slug='taylor' />
          {this.props.children ? React.cloneElement(this.props.children, ...this.props) : null}
        </div>
      </div>
    )
  }
}

export { TaylorHomepage, TaylorFolderAssets }
