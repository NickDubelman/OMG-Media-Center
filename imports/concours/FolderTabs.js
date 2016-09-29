import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getParentLabel } from '/imports/utils'

export default class FolderTabs extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    getParentLabel(this.props.menuItems, this.props.params.folderId)
  }  
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      getParentLabel(this.props.menuItems, nextProps.params.folderId)
    }    
  }
  render(){
    return(
      <h1> {this.props.folderParentLabel} </h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    folderParentLabel: state.folderParentLabel,
  }
}

export default connect(mapStateToProps)(FolderTabs)