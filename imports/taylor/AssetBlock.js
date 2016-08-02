import React from 'react'

const AssetBlock = ({asset, openModal, index}) => (
  <div style={quarterColumn} key={asset.id}>
    <div style={assetBlock}>
      <div className='asset-frame' onClick={openModal.bind(this, index)}>
        { renderThumbnail(asset) }
        <div style={information}>
          <h3 style={title}>{asset.title}</h3>
          <p style={description}>{asset.description}</p>
        </div>
      </div>
    </div>
  </div>
)

function renderThumbnail(asset){
  switch(asset.type){
    case 'video':
    case 'image':
      return <img style={img} src={'https://d2hl09dnq0lt6g.cloudfront.net/jpg?w=344&h=211&url='+asset.posterFrame} />
    case 'document':
      return <img style={img} src={'https://d2hl09dnq0lt6g.cloudfront.net/jpg?w=344&h=211&url='+asset.derivatives[1].url} />
    default:
      return
  }
}

export default AssetBlock

let quarterColumn = {
  display: 'inline-block',
  width: '25%',
  position: 'relative'
}
let assetBlock={paddingLeft: 15, paddingRight: 15}
let img={width: '100%', cursor: 'pointer', minHeight: 159}
let information={
  paddingTop: '0.4em',
  paddingLeft: '0.8em',
  paddingRight: '0.8em',
  paddingBottom: '0.8em'
}
let title={
  paddingBottom: '0.2em',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}
let description={
  minHeight: 10,
}