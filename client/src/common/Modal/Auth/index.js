import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import {
  getUser
} from './actions'

class Auth extends Component {
  render() {
    return (
      <div id="auth">
        Auth
      </div>
    )
  }
}

const mapStateToProps = ({ user: { token, user } }) => {
  return { user, token }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ getUser }, dispatch), dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
