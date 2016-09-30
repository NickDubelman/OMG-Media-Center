import React, { Component } from 'react'

import FolderAssets from '/imports/components/FolderAssets'
import FolderTabs from './FolderTabs'
import ConcoursTheme from './ConcoursTheme'

import menuItems from './menuItems'

import { findFirstLeafByLabel } from '/imports/utils'

class ConcoursFolderAssets extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let params = this.props.params
    let showBreadcrumbs = this.props.routes[1].path === '/concours2'
    if (params.folderId){
      return(
        <div>
          {this.props.routes[1].path === '/concours' ? 
            <FolderTabs params={params} menuItems={menuItems} />
          : null}
          <FolderAssets params={params} theme={ConcoursTheme} menuItems={menuItems} showBreadcrumbs={showBreadcrumbs} />
        </div>
      )
    }
    // If the component does not have a params.folderId, then it must be a gallery
    // and we load FolderAssets for the folder who is the first child leaf of the node
    // who has the label equal to the current gallery's name
    let modifiedParams = { ...params, folderId: findFirstLeafByLabel(menuItems, params.galleryName).id }
    return (
      <div>
        <FolderTabs params={params} menuItems={menuItems} isGallery />
        <FolderAssets params={ modifiedParams } theme={ConcoursTheme} menuItems={menuItems} />
      </div>
    )    
  }
}

export default ConcoursFolderAssets