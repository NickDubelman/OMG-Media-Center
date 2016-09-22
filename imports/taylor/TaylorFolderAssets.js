import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'
import TaylorTheme from './TaylorTheme'

const TaylorFolderAssets = ({params}) => (
  <FolderAssets params={params} theme={TaylorTheme} />
)

export default TaylorFolderAssets