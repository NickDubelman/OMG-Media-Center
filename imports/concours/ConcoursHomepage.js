import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { initializeAssets } from '/imports/actions'

class ConcoursHomepage extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    document.body.style.background = "url('/concours_bg.jpg') no-repeat center top"
  }
  componentWillUnmount(){
    document.body.style.background = ''
  }
  render(){
    return(
      <div className='row welcomeMessageRow'>
        <div className='welcomeMessage'>
          <h1>Concours Message</h1>
          <div className='welcomeMessageText'>
            Concours Welcome Message Goes Here
          </div>
        </div>
      </div>
    )
  }
}

export default ConcoursHomepage