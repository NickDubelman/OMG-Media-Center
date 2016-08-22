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
    if(document.documentElement.clientWidth <= 1024){
      document.body.style.backgroundPosition = 'right top'
    }
  }
  componentWillUnmount(){
    document.body.style.background = null
    document.body.style.backgroundPosition = null
  }
  render(){
    return(
      <div className='row welcomeMessageRow'>
        <div className='welcomeMessage'>
          <h1 className='welcomeMessageHeader'>Welcome Message</h1>
          <div className='welcomeMessageText'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </div>
        </div>
      </div>
    )
  }
}

export default TaylorHomepage