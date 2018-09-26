import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import {
  getUser,
  login,
  register,
  changeInput
} from './auth.actions'

import Header from '../common/Header'
import Body from '../common/Body'
import Footer from '../common/Footer'

import {
  Form 
} from './auth.elements'
  
class Auth extends Component {
  buttons(){
    const { match: { params: { auth } }, history: { push }, action: { login, register, getUser }, email, password } = this.props
    return auth === 'login' ? [
      {type: 'login', name: 'Login', action: () => login({email, password}, () => getUser(() => push('/projects/all'))) }
    ]: [
      {type: 'register', name: 'Register', action: () => register({email, password}, () => getUser(() => push('/projects/all'))) }
    ]
  }
  renderForm() {
    const { action: { changeInput }, email, password } = this.props;
    return (
      <Form>
        <input type="email" placeholder="Email" value={email} onChange={ e => changeInput('email', e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={ e => changeInput('password', e.target.value)}/>
      </Form>
    )
  }
  render() {
    const { match: { params: { auth } }, history: { goBack }, authenticating, gettingUser } = this.props
    return (
      <div id="auth" onClick={ e => e.stopPropagation()}>
        <Header title={auth} goBack={goBack} />
        <Body component={this.renderForm()} isLoading={authenticating === true || gettingUser === true} />   
        <Footer buttons={this.buttons()} isLoading={authenticating === true || gettingUser === true} />
      </div>
    )
  }
}

const mapStateToProps = ({ user: { token, user, email, password, authenticating, gettingUser } }) => {
  return { user, token, email, password, authenticating, gettingUser }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ getUser, login, register, changeInput }, dispatch), dispatch }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
