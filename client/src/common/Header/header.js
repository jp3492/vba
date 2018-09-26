import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  StyledHeader,
  Logo,
  Menu,
  MenuIcon,
  MenuItem,
  MobileMenu,
  MobileMenuBackdrop
} from './header.elements'

import { logout, navigate, changeDevice, mobileNav } from './header.actions'
import { getUser } from '../../common/Modal/Auth/auth.actions'

class Header extends Component {
  componentWillMount(){
    const { action: { getUser }, history: { push }, location: { pathname } } = this.props    
    getUser(() => push(pathname))
  }
  componentDidMount() {
    const { device, action: { changeDevice } } = this.props
    if (document.getElementById('header').offsetWidth <= 768){      
      changeDevice('mobile')
    }
    window.addEventListener('resize', () => {
      const width = document.getElementById('header').offsetWidth
      const toDevice = (width >= 1025) ? 'desktop': (width < 1025 && width >= 768) ? 'tablet': 'mobile'
      if (device !== toDevice) {
        changeDevice(toDevice)
      }
    })
  }
  renderMenu(){    
    const { action: { logout, mobileNav }, device, nav, history: { push }, user, gettingUser, authenticating, token } = this.props
    const menu = (authenticating === true) ? [
      { value: 'Authenticating...' }
    ]: (gettingUser === true) ? [
      { value: 'Retrieving account information...' }
    ]: (user !== null && token !== null) ? [
      { value: 'Projects', action: () => { push('/projects/root/all') } },
      { value: 'Users', action: () => { push('/users/all') } },
      { value: 'Logout', action: () => { logout(); push('/') } }
    ]: [
      { value: 'Register', action: () => { push('/authentication/register') } },
      { value: 'Login', action: () => { push('/authentication/login') } }
    ]
    if (device === 'mobile') {
      return this.mobileMenu(menu, nav)
    } else {
      return this.desktopMenu(menu, nav)
    }
  }
  desktopMenu(menu, nav){
    return (
      <Menu>
        {menu.map((m, i) => { return this.renderItem(m, nav, i) } )}
      </Menu>
    )
  }

  mobileMenu(menu, nav){
    const { action: { mobileNav }, mobileNavOpen } = this.props
    return [
      <MenuIcon active={mobileNavOpen === true ? true: false} className="material-icons" onClick={ () => mobileNav() } key="menuIcon">
        {mobileNavOpen === true ?
          'clear': 'menu'
        }
      </MenuIcon>,
      <MobileMenu isOpen={mobileNavOpen} onClick={ () => mobileNav()} key="mobileMenu">
        {menu.map((m, i) => { return this.renderItem(m, nav, i) } )}
      </MobileMenu>,
      mobileNavOpen === true ? <MobileMenuBackdrop onClick={() => mobileNav()} />: null
    ]
  }
  renderItem(m, nav, i){
    const { value, action } = m
    const className = (value.toLowerCase() === nav) ? 'menuSelected': ''
    return (
      <MenuItem className={className} id={value.toLowerCase()} onClick={action} key={`menuItem${i}`}>
        <a>{value}</a>
      </MenuItem>
    )
  }
  render(){
    const { user, gettingUser } = this.props
    return (
      <StyledHeader id="header">
        <div>
          <Logo><Link to={(typeof user === 'object') ? '/': '/'}>VB-Analytics</Link></Logo>
          <div></div>
          {this.renderMenu()}
        </div>
      </StyledHeader>
    )
  }
}

const mapStateToProps = ({ user: { user, gettingUser, authenticating, token }, navigation: { nav, device, mobileNavOpen } }) => {
  return { user, nav, device, gettingUser, authenticating, token, mobileNavOpen }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ logout, navigate, changeDevice, mobileNav, getUser }, dispatch), dispatch }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
