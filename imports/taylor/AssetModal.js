import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const AssetModal = ({assets, modalActive, activeAsset, closeModal}) => {
	let asset = assets[activeAsset]
	let assetType
	if(asset) {assetType = asset.type}
	return(
		<Modal dialogClassName='custom-width-modal' show={modalActive} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title style={modalTitle}>
					{asset ? asset.title : 'Title'}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>          
				{assetType=='video' ? <video controls width='720' src={asset.derivatives[1].url} /> : null}
				{assetType=='image' ? <img width='720' src={asset.derivatives[1].url} /> : null }
				{assetType=='document' ? <img width='720' src={'https://d2hl09dnq0lt6g.cloudfront.net/jpg?w=720&h=500&url='+asset.derivatives[1].url} /> : null }
			</Modal.Body>
			<Modal.Footer>
				<a href={asset ? asset.derivatives[0].url : '#'}>
					<Button>Download {assetType}</Button>
				</a>
			</Modal.Footer>
		</Modal>
	)
}

let modalTitle={fontSize: 30}

export default AssetModal