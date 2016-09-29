import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'
import FolderTabs from './FolderTabs'
import ConcoursTheme from './ConcoursTheme'

import menuItems from './menuItems'

const ConcoursFolderAssets = ({params}) => (
  <div>
    <FolderTabs params={params} menuItems={menuItems} />
    <FolderAssets params={params} theme={ConcoursTheme} menuItems={menuItems} />
  </div>
)

export default ConcoursFolderAssets