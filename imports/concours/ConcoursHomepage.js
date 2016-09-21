import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { initializeAssets } from '/imports/actions'

class ConcoursHomepage extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    document.body.style.background = 'grey'
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
            Concours
          </div>
        </div>
      </div>
    )
  }
}

export default ConcoursHomepage