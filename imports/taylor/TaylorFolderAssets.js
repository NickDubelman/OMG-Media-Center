import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'

const TaylorTheme = {
  primaryColor: '#4bab49',
  folderTitleColor: '#4bab49',
  assetBorderColor: '#0e8044',
}

const TaylorFolderAssets = ({params}) => (
  <FolderAssets params={params} theme={TaylorTheme} />
)

export default TaylorFolderAssets