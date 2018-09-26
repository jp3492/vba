import axios from 'axios'

import {
  LOGOUT,
  NAVIGATE,
  DEVICE,
  MOBILE_NAV
} from './header.types'

const mobileNav = () => dispatch => {
  dispatch({ type: MOBILE_NAV })
}

const logout = () => async dispatch => {
  await localStorage.removeItem('vbaToken')
  console.log(localStorage);
  
  axios.defaults.headers.common['authorization'] = ''
  dispatch({ type: LOGOUT })
}

const navigate = target => dispatch => {
  dispatch({ type: NAVIGATE, payload: target })
}

const changeDevice = device => dispatch => {
  dispatch({ type: DEVICE, payload: device })
}

export {
  logout,
  navigate,
  changeDevice,
  mobileNav
}
