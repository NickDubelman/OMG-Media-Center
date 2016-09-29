import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetGrid from './AssetGrid'
import Breadcrumbs from './Breadcrumbs'
import Spinner from './Spinner'
import menuItemsRoot from '/imports/taylor/menuItems'

import { dfs } from '/imports/utils'
import { getFolder, getFolderAssets, initializeAssets } from '/imports/actions'

const FolderAssets = ({name, assets, pageSize, path, loadChunkSize, theme, showBreadcrumbs}) => {
  if(!assets){
    return <Spinner color={theme.primaryColor} />
  }
  return(
    <div style={{marginTop: -15}}>
      <header id='page-header'>
        <h1 id='page-title' style={{color: theme.folderTitleColor}}>{name}</h1>
        <span className='faded-line'></span>
      </header>
      { showBreadcrumbs ? <Breadcrumbs path={path} /> : null }
      <AssetGrid theme={theme}/>
    </div>
  )
}

class FolderAssetsContainer extends Component{
  constructor(props){
    super(props)
    this.path = []
  }
  componentWillMount(){
    dfs(this.props.menuItems, this.props.params.folderId, this.path)
  }
  componentDidMount(){
    this.props.getFolder(this.props.params.folderId)
    this.props.getFolderAssets(this.props.params.folderId, this.props.loadChunkSize, 1, this.props.pageSize, 1)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.path = []
      dfs(menuItemsRoot, nextProps.params.folderId, this.path)
      this.props.getFolder(nextProps.params.folderId)
      this.props.getFolderAssets(nextProps.params.folderId, this.props.loadChunkSize, 1, this.props.pageSize, 1)
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
        pageSize={this.props.pageSize}
        path={this.path}
        loadChunkSize={this.props.loadChunkSize}
        theme={this.props.theme}
        showBreadcrumbs={this.props.showBreadcrumbs} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pageSize: state.pageSize,
    loadChunkSize: state.loadChunkSize,
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
    getFolderAssets: (folderId, loadChunkSize, chunkNumber, pageSize, currPage) => {
      dispatch(getFolderAssets(folderId, loadChunkSize, chunkNumber, pageSize, currPage))
    },
    initializeAssets: () => {
      dispatch(initializeAssets())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderAssetsContainer)