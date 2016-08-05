import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetGrid from './AssetGrid'

import { getFolder, getFolderAssets } from '/imports/actions'

const FolderAssets = ({name, assets, perPage}) => {
  let title = { textTransform: 'uppercase' }
  return(
    <div>
      <header id='page-header'>
        <h1 style={title} id='page-title'>{name}</h1>
      </header>
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
  }
  componentDidMount(){
    this.props.getFolder(this.props.params.folderId)
    this.props.getFolderAssets(this.props.params.folderId, this.perPage, 1)
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
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
        perPage={this.perPage} />
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