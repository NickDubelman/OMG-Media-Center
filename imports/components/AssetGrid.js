import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetModal from './AssetModal'
import AssetBlock from './AssetBlock'
import AssetGridPages from './AssetGridPages'
import Spinner from './Spinner'

import { openModal, closeModal } from '/imports/actions'

const AssetGrid = (props) => {
  if (!props.assets){
    return <div />
  }
  else if(props.assets.length === 0){
    return(
      <h2>This folder is empty.</h2>
    )
  }
	return(
    <div>
  		<div style={{marginTop: 15, display: 'inline-block', width: '100%'}}>
  			{props.assets.map((asset, i)=>(
          <AssetBlock key={i} asset={asset} 
            index={i} openModal={props.openModal} />
        ))}
        <AssetModal assets={props.assets} modalActive={props.modalActive} closeModal={props.closeModal} activeAsset={props.activeAsset} />
      </div>
      <AssetGridPages pageSize={props.pageSize} loadChunkSize={props.loadChunkSize} color={props.theme.primaryColor} /> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pageSize: state.pageSize,
    loadChunkSize: state.loadChunkSize,
    modalActive: state.modalActive,
    activeAsset: state.activeAsset, 
    currFolder: state.currFolder,
    assets: state.assets,
    totalResults: state.totalResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (index) => {
      dispatch(openModal(index))
    },
    closeModal: () => {
      dispatch(closeModal())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetGrid)