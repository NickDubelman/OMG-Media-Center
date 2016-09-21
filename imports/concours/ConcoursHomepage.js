import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { initializeAssets } from '/imports/actions'

class ConcoursHomepage extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    document.body.style.background = "grey"
    if(document.documentElement.clientWidth <= 1024){
      document.body.style.backgroundPosition = 'right top'
    }
    else{
      document.body.style.backgroundPosition = 'top center'
      document.body.style.backgroundAttachment = 'fixed'
      document.body.style.backgroundSize = 'cover'
    }
  }
  componentWillUnmount(){
    document.body.style.background = ''
    document.body.style.backgroundPosition = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundAttachment = ''
  }
  render(){
    return(
      <div className='row welcomeMessageRow'>
        <div className='welcomeMessage'>
          <h1>Concours Message</h1>
          <div className='welcomeMessageText'>
            Concours
          </div>
        </div>
      </div>
    )
  }
}

export default ConcoursHomepage