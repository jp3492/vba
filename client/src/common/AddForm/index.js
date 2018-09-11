import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {

} from './elements'

import {

} from './actions'

class AddForm extends Component {
  render(){
    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({ }) => {
  return { }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ }, dispatch), dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
