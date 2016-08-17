import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetGrid from './AssetGrid'
import AssetGridPages from './AssetGridPages'
import Breadcrumbs from './Breadcrumbs'
import menuItemsRoot from '/imports/taylor/menuItems'

import { getFolder, getFolderAssets, initializeAssets } from '/imports/actions'

/*

dfs(node, folderId, list): 

Given a node in a tree, a folderId that designates a node we are looking for, and an 
array that will hold our result, this function performs a depth-first traversal of the
tree and finds the path from a rootNode to a node that contains a folderId equal to 
the one we are looking for. It stores this path as the labels of the nodes in the path 
ordered by [eldestAncestor, ... , parentOfNode, nodeOfInterest]

*/
function dfs(node, folderId, list){
  if (node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (dfs(subitem, folderId, list)){
        if(node.label){
          list.unshift(node.label)
        }
        return true
      }
    }  
  }
  if (node.id === folderId){
    list.unshift(node.label)
    return true
  }
  return false
}

const FolderAssets = ({name, assets, perPage, path, loadChunkSize}) => {
  let list = []
  return(
    <div style={{marginTop: -15}}>
      <header id='page-header'>
        <h1 id='page-title'>{name}</h1>
        <span className='faded-line'></span>
      </header>
      <Breadcrumbs path={path} />
      { assets ? 
        assets.length > 0 ? 
          <AssetGrid perPage={perPage} /> 
        : <h2>This folder is empty.</h2>
      : null } {/* this is where a loading graphic might go */}
      <AssetGridPages perPage={perPage} loadChunkSize={loadChunkSize} /> 
    </div>
  )
}

class FolderAssetsContainer extends Component{
  constructor(props){
    super(props)
    this.perPage = 8
    this.loadChunkSize = 32
    this.path = []
  }
  componentWillMount(){
    dfs(menuItemsRoot, this.props.params.folderId, this.path)
  }
  componentDidMount(){
    this.props.getFolder(this.props.params.folderId)
    this.props.getFolderAssets(this.props.params.folderId, this.loadChunkSize, 1, this.perPage, 1)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.path = []
      dfs(menuItemsRoot, nextProps.params.folderId, this.path)
      this.props.getFolder(nextProps.params.folderId)
      this.props.getFolderAssets(nextProps.params.folderId, this.loadChunkSize, 1, this.perPage, 1)
    }    
  }
  componentWillUnmount(){
    this.props.initializeAssets()
  }
  render(){
    return(
      <FolderAssets 
        name={this.props.name}
        assets={this.props.assets}
        perPage={this.perPage}
        path={this.path}
        loadChunkSize={this.loadChunkSize} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.folderName,
    assets: state.assets,
    totalResults: state.totalResults, 
    currPage: state.currPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFolder: (folderId) => {
      dispatch(getFolder(folderId))
    },
    getFolderAssets: (folderId, loadChunkSize, chunkNumber, perPage, currPage) => {
      dispatch(getFolderAssets(folderId, loadChunkSize, chunkNumber, perPage, currPage))
    },
    initializeAssets: () => {
      dispatch(initializeAssets())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderAssetsContainer)