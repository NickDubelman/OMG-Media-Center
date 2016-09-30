import React from 'react'

const AssetBlock = ({asset, openModal, index}) => (
  <div className='col-md-4 col-lg-3 assetBlock' key={asset.id}>
    <div className='assetFrame' onClick={openModal.bind(this, index)}>
      { renderThumbnail(asset) }
      <div className='assetInfo'>
        <h3 className='assetTitle'>{asset.title}</h3>
        <p className='assetDescription'>{asset.description}</p>
      </div>
    </div>
  </div>
)

function renderThumbnail(asset){
  switch(asset.type){
    case 'video':
    case 'image':
      return <img src={'https://d2hl09dnq0lt6g.cloudfront.net/jpg?w=344&h=211&url='+asset.posterFrame} />
    case 'document':
      return <img src={'https://d2hl09dnq0lt6g.cloudfront.net/jpg?w=344&h=211&url='+asset.derivatives[1].url} />
    default:
      return
  }
}

export default AssetBlock