import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetGrid from './AssetGrid'

import { getFolder, getFolderAssets } from '/imports/actions'

const FolderAssets = ({name, assets, perPage, totalResults}) => {
  let title = { textTransform: 'uppercase' }
  return(
    <div>
      <header id='page-header'>
        <h1 style={title} id='page-title'>{name}</h1>
      </header>
      { assets ? 
        assets.length > 0 ? 
          <AssetGrid assets={assets} perPage={perPage} totalResults={totalResults} /> 
        : <h2>This folder is empty.</h2>
      : null } {/* this is where a loading graphic might go */} 
    </div>
  )
}

class FolderAssetsContainer extends Component{
  constructor(){
    super()
    this.perPage = 8
  }
  componentDidMount(){
    this.props.getFolder(this.props.params.folderId)
    this.props.getFolderAssets(this.props.params.folderId, this.perPage, 1)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.props.getFolder(nextProps.params.folderId)
      this.props.getFolderAssets(nextProps.params.folderId, this.perPage, 1)
    }    
  }  
  render(){
    return(
      <FolderAssets 
        name={this.props.name}
        assets={this.props.assets}
        perPage={this.perPage}
        totalResults={this.props.totalResults} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderAssetsContainer)