import axios from 'axios'

import {
  LOGOUT,
  NAVIGATE,
  DEVICE
} from './types'

const logout = () => dispatch => {
  axios.defaults.headers.common['Authorization'] = ''
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
  changeDevice
}
