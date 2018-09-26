import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

class Modal extends Component {

  render(){
    return (
      <div id="modalBackground" onClick={ e => e.stopPropagation()}>
        <div id="modalContainer">

        </div>
      </div>
    )
  }
}

export default Modal
