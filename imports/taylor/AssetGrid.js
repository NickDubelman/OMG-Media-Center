import React, { Component } from 'react'

import AssetModal from './AssetModal'
import AssetBlock from './AssetBlock'
import AssetGridPages from './AssetGridPages'

const AssetGrid = ({assets, perPage, totalResults, openModal, closeModal, activeAsset, modalActive}) => {
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

export default class AssetGridContainer extends Component{
  constructor(props){
    super(props)
    this.state = {modalActive: false, activeAsset: null}
    this.closeModal = this.closeModal.bind(this)
  }
  openModal(assetId){
    this.setState({modalActive: true, activeAsset: assetId})
  }
  closeModal(){
    this.setState({modalActive: false})
  }
  render(){
    return(
      <AssetGrid assets={this.props.assets}
        perPage={this.props.perPage}
        totalResults={this.props.totalResults}
        modalActive={this.state.modalActive}
        activeAsset={this.state.activeAsset}
        openModal={this.openModal.bind(this)}
        closeModal={this.closeModal} />
    )
  }
}
