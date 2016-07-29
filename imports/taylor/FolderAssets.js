import React, { Component } from 'react'

import AssetGrid from './AssetGrid'

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

export default class FolderAssetsContainer extends Component{
  constructor(){
    super()
    this.state = { assets: null, name: '', totalResults: 0 }
    this.perPage = 8
  }
  componentDidMount(){
    this.getFolder(this.props.params.folderId)
    this.getFolderAssets(this.props.params.folderId, this.perPage, 1)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.getFolder(nextProps.params.folderId)
      this.getFolderAssets(nextProps.params.folderId, this.perPage, 1)
    }    
  }
  getFolder(folderId){
    Meteor.call('getFolder', folderId, (err, res) => {
      if(err){
        console.log(err)
      }
      else{
        let data = res.data
        this.setState({name: data.name})
      }
    })
  }
  getFolderAssets(folderId, perPage, pageNumber){
    Meteor.call('getFolderAssets', folderId, perPage, pageNumber, (err, res) => {
      if(err){
        this.setState({assets: []})
      }
      else{
        let data = res.data
        let totalResults = res.headers["total-results"]
        this.setState({assets: data, totalResults})
      }
    })
  }  
  render(){
    return(
      <FolderAssets 
        name={this.state.name}
        assets={this.state.assets}
        perPage={this.perPage}
        totalResults={this.state.totalResults} />
    )
  }
}