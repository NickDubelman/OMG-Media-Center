import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetGrid from './AssetGrid'
import Breadcrumbs from './Breadcrumbs'
import menuItems, { rootNode } from '/imports/taylor/menuItems'

import { getFolder, getFolderAssets } from '/imports/actions'

/*

dfs(node, folderId, list): 

Given a node in a tree, a folderId that designates a node we are looking for, and an 
array that will hold our result, this function performs a depth-first traversal of the
tree and finds the path from a rootNode to a node that contains a folderId equal to 
the one we are looking for. It stores this path as the labels of the nodes in the path 
ordered by [oldestDescendant, ... , parentOfNode, nodeOfInterest]

*/
function dfs(node, folderId, list){
  if (node.subitems){
    node.subitems.map((subitem) => {
      if (dfs(subitem, folderId, list)){
        if(node.label) {
          list.unshift(node.label)
        }
        return true
      }
    })    
  }
  else if (node.id === folderId){
    list.unshift(node.label)
    return true
  }
  return false
}

const FolderAssets = ({name, assets, perPage, path}) => {
  let title = { textTransform: 'uppercase' }
  let list = []
  return(
    <div>
      <header id='page-header'>
        <h1 style={title} id='page-title'>{name}</h1>
      </header>
      <Breadcrumbs path={path} />
      { assets ? 
        assets.length > 0 ? 
          <AssetGrid perPage={perPage} /> 
        : <h2>This folder is empty.</h2>
      : null } {/* this is where a loading graphic might go */} 
    </div>
  )
}

class FolderAssetsContainer extends Component{
  constructor(){
    super()
    this.perPage = 8
    this.path = []
  }
  componentWillMount(){
    dfs(rootNode, this.props.params.folderId, this.path)
  }
  componentDidMount(){
    this.props.getFolder(this.props.params.folderId)
    this.props.getFolderAssets(this.props.params.folderId, this.perPage, 1)
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.path = []
      dfs(rootNode, nextProps.params.folderId, this.path)
      this.props.getFolder(nextProps.params.folderId)
      this.props.getFolderAssets(nextProps.params.folderId, this.perPage, 1)
      window.removeEventListener("scroll", this.handleScroll.bind(this))
    }    
  }
  handleScroll(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let morePages = this.props.currPage * this.perPage < this.props.totalResults
      if (morePages){
        this.props.getMoreAssets(this.props.params.folderId, this.perPage, this.props.currPage+1, true)
      }
    }
  }  
  render(){
    return(
      <FolderAssets 
        name={this.props.name}
        assets={this.props.assets}
        perPage={this.perPage}
        folderId={this.props.params.folderId}
        path={this.path} />
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
    getFolderAssets: (folderId, perPage, pageNumber) => {
      dispatch(getFolderAssets(folderId, perPage, pageNumber))
    },
    getMoreAssets: (folderId, perPage, pageNumber) => {
      dispatch(getFolderAssets(folderId, perPage, pageNumber, true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderAssetsContainer)