import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { } from './actions'
import { } from './types'

import Header from '../../common/Header'

class Player extends Component {
  render() {
    return [
      <Header />,
      <div id="player">
        Player
      </div>
    ]
  }
}

const mapStateToProps = ({ }) => {
  return { }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ }, dispatch), dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
