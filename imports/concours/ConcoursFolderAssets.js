import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'

const ConcoursTheme = {
  primaryColor: '#f1edcc',
  folderTitleColor: '#686868'
}


const ConcoursFolderAssets = ({params}) => (
  <FolderAssets params={params} theme={ConcoursTheme} />
)

export default ConcoursFolderAssets