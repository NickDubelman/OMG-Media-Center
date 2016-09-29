import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'
import TaylorTheme from './TaylorTheme'

import menuItems from './menuItems'

const TaylorFolderAssets = ({params}) => (
  <FolderAssets params={params} theme={TaylorTheme} menuItems={menuItems} showBreadcrumbs />
)

export default TaylorFolderAssets