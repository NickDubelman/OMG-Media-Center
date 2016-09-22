import React from 'react'

import FolderAssets from '/imports/components/FolderAssets'
import ConcoursTheme from './ConcoursTheme'

const ConcoursFolderAssets = ({params}) => (
  <FolderAssets params={params} theme={ConcoursTheme} />
)

export default ConcoursFolderAssets