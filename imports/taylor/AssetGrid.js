import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetModal from './AssetModal'
import AssetBlock from './AssetBlock'
import AssetGridPages from './AssetGridPages'

import { openModal, closeModal, getFolder } from '/imports/actions'

const AssetGrid = (props) => {
	return(
		<div>
			{props.assets.map((asset, i)=>(
        <AssetBlock key={i} asset={asset} index={i} openModal={props.openModal} />
      ))}
      <AssetGridPages perPage={props.perPage} />
      <AssetModal assets={props.assets} modalActive={props.modalActive} closeModal={props.closeModal} activeAsset={props.activeAsset} />
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    modalActive: state.modalActive,
    activeAsset: state.activeAsset, 
    currFolder: state.currFolder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (index) => {
      dispatch(openModal(index))
    },
    closeModal: () => {
      dispatch(closeModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetGrid)