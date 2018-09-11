import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  StyledHeader,
  StyledLogo,
  StyledMenu,
  StyledMenuIcon,
  StyledMenuItem
} from './elements'

import {
  logout,
  navigate,
  changeDevice
} from './actions'

class Header extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
       const { device, action: { changeDevice } } = this.props
       const width = document.getElementById('header').offsetWidth
       const toDevice = (width >= 1025) ? 'desktop': (width < 1025 && width >= 768) ? 'tablet': 'mobile'
       if (device !== toDevice) {
         changeDevice(toDevice)
       }
     })
   }
  renderMenu(user){
    const { action: { navigate, logout }, device, nav, history: { push } } = this.props
    //3 states of authentication: null when not logged in, getting when currently getting user and user Object when user is authenticated
    const menu = (user === 'getting') ? [
      { value: 'Retrieving account information...' }
    ]: (user !== null) ? [
      { value: 'FileManager', action: () => { push('/') } },
      { value: 'Profile', action: () => { push('/profile') } },
      { value: 'Logout', action: () => { logout(); push('/landing') } }
    ]: [
      { value: 'Register', action: () => { push('/welcome/register') } },
      { value: 'Login', action: () => { push('/welcome/login') } }
    ]
    if (device === 'mobile') {
      return this.mobileMenu(menu, nav)
    } else {
      return this.desktopMenu(menu, nav)
    }
  }
  desktopMenu(menu, nav){
    return (
      <StyledMenu>
        {menu.map( m => { return this.renderItem(m, nav) } )}
      </StyledMenu>
    )
  }

  mobileMenu(){
    return <StyledMenuIcon className="material-icons">menu</StyledMenuIcon>
  }
  renderItem(m, nav){
    const { value, action } = m
    const className = (value.toLowerCase() === nav) ? 'menuSelected': ''
    return (
      <StyledMenuItem className={className} id={value.toLowerCase()} onClick={action} >
        <a>{value}</a>
      </StyledMenuItem>
    )
  }
  render(){
    const { user } = this.props
    return (
      <StyledHeader id="header">
        <a>
          <StyledLogo><Link to={(typeof user === 'object') ? '/': '/landing'}>VB-Analytics</Link></StyledLogo>
          <div></div>
          {this.renderMenu(user)}
        </a>
      </StyledHeader>
    )
  }
}

const mapStateToProps = ({ user: { user }, navigation: { nav, device } }) => {
  return { user, nav, device }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ logout, navigate, changeDevice }, dispatch), dispatch }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
