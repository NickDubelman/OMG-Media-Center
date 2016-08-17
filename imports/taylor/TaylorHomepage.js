import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { initializeAssets } from '/imports/actions'

class TaylorHomepage extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    document.body.style.background = "url('/homebg.png')"
  }
  componentWillUnmount(){
    document.body.style.background = null
  }
  render(){
    return(
      <div style={taylorHomepage}>
        <div style={{paddingTop: 25}} className='row'>
          <div style={{position: 'absolute', left: 500, width: '50%'}}>
            <h1 style={{paddingBottom: 10}}>Welcome Message</h1>
            <div style={blah}>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let blah={
  fontSize: 17,
  padding: 15,
  paddingLeft: 20,
  paddingRight: 20,
  border: '1px solid #ddd',
  WebkitBoxShadow: '0px 1px 4px -1px rgba(0, 0, 0, 0.25)',
  MozBoxShadow: '0px 1px 4px -1px rgba(0, 0, 0, 0.25)',
  boxShadow: '0px 1px 4px -1px rgba(0, 0, 0, 0.25)',
  WebkitTransition: 'border .2s ease-in-out',
  OTransition: 'border .2s ease-in-out',
  transition: 'border .2s ease-in-out'
}

let taylorHomepage={
  marginTop: 25
}

export default TaylorHomepage