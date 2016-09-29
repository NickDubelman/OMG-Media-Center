import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link }  from 'react-router'

import { getParent, getSiblings, findFirstLeaf } from '/imports/utils'

export default class FolderTabs extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    getParent(this.props.menuItems, this.props.params.folderId)
    getSiblings(this.props.menuItems, this.props.params.folderId)
  }  
  componentWillReceiveProps(nextProps){
    if(this.props.params.folderId != nextProps.params.folderId){
      getParent(this.props.menuItems, nextProps.params.folderId)
      getSiblings(this.props.menuItems, nextProps.params.folderId)
    }    
  }
  render(){
    return(
      <div>
        <h2 style={styles.parent}> {this.props.folderParentLabel} </h2>
        <div style={styles.tabs}>
          {this.props.folderSiblings.map((sibling)=>
            <Link key={'tab-'+sibling.id} to={'/concours/folder/'+findFirstLeaf(sibling)}>
              <button style={styles.tab}>{sibling.label}</button>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    folderParentLabel: state.folderParentLabel,
    folderSiblings: state.folderSiblings
  }
}

const styles = {
  parent: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 2,
  },
  tabs: {
    marginBottom: 30,
  },
  tab: {
    cursor: 'pointer',
    padding: 10,
    fontSize: 18,
    border: 'solid black 1px',
    fontFamily: 'BenchNine',
    backgroundColor: 'white',
    marginRight: 6,
    outline: 'none'
  }
}

export default connect(mapStateToProps)(FolderTabs)