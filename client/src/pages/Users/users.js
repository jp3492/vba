import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { } from './users.actions'
import { } from './users.types'

class Users extends Component {
  render() {
    return (
      <div id="users">
        Users
      </div>
    )
  }
}

const mapStateToProps = ({ }) => {
  return { }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ }, dispatch), dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
