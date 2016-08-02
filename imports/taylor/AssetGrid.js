import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetModal from './AssetModal'
import AssetBlock from './AssetBlock'
import AssetGridPages from './AssetGridPages'

import { openModal, closeModal, getFolder } from '/imports/actions'

const AssetGrid = ({assets, perPage, totalResults, openModal, closeModal, activeAsset, modalActive, getFolder}) => {
	return(
		<div>
			{assets.map((asset, i)=>(
        <AssetBlock key={i} asset={asset} index={i} openModal={openModal} />
      ))}
      <AssetGridPages perPage={perPage} totalResults={totalResults} />
      <AssetModal assets={assets} modalActive={modalActive} closeModal={closeModal} activeAsset={activeAsset} />
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    modalActive: state.modalActive,
    activeAsset: state.activeAsset
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