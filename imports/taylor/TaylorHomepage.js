import React from 'react'

const TaylorHomepage = () => (
  <div style={taylorHomepage}>
    <img style={imgResponsive} src='https://dmc_new.s3.amazonaws.com/concours-5918c5e55ddf7aac/portal_header_image/11/default/concours_cover.png?1390519845' />
    <div style={{paddingTop: 15}} className='row'>
      <div className='col-md-6'>
        <h1>Galleries</h1>
      </div>
      <div className='col-md-6'>
        <h1>Welcome Message</h1>
      </div>
    </div>
  </div>
)

let taylorHomepage={
  marginTop: 25
}

let imgResponsive= {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}

export default TaylorHomepage