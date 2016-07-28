import React, { Component } from 'react'

import AssetGrid from './AssetGrid'

const FolderAssets = ({name, assets}) => {
  let title = { textTransform: 'uppercase' }
  return(
    <div>
      <header id='page-header'>
        <h1 style={title} id='page-title'>{name}</h1>
      </header>
      { assets ? 
        assets.length > 0 ? <AssetGrid assets={assets} /> : <h2>This folder is empty.</h2>
      : null } {/* this is where a loading graphic might go */} 
    </div>
  )
}

export default class FolderAssetsContainer extends Component{
  constructor(){
    super()
    this.state = {assets: null, name: ''}
  }
  componentDidMount(){
    this.fetchData(this.props.params.folderId)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      this.fetchData(nextProps.params.folderId)
    }    
  }
  fetchData(folderId){
    Meteor.call('getFolder', folderId, (err, res) => {
      if(err){
        console.log(err)
      }
      else{
        let data = res.data
        this.setState({name: data.name})
      }
    })
    Meteor.call('getFolderAssets', folderId, 1, (err, res) => {
      if(err){
        this.setState({assets: []})
      }
      else{
        let data = res.data
        this.setState({assets: data})
      }
    })
  }  
  render(){
    return(
      <FolderAssets name={this.state.name} assets={this.state.assets} />
    )
  }
}