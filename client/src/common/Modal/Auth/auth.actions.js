import axios from 'axios'

import {
  GETTING_USER,
  GET_USER,
  AUTHENTICATED,
  AUTHENTICATING,
  CHANGE_AUTH_INPUT
} from './auth.types'
import { callbackify } from 'util';

const changeInput = (key, value) => dispatch => {
  dispatch({ type: CHANGE_AUTH_INPUT, payload: { key, value }})
}

const getUser = callback => async dispatch => {
  dispatch({ type: GETTING_USER })
  const res = await axios.get('/auth/user')
  dispatch({ type: GET_USER, payload: res.data })
  callback()
}

const register = (user, callback) => async dispatch => {
  dispatch({ type: AUTHENTICATING })
  const res = await axios.post('/auth/register', user)
  axios.defaults.headers.common['authorization'] = res.data.token
  await localStorage.setItem('token', res.data.token)
  dispatch({ type: AUTHENTICATED, payload: res.data })
  callback()
}

const login = (user, callback) => async dispatch => {
  dispatch({ type: AUTHENTICATING })
  const res = await axios.post('/auth/login', user)
  axios.defaults.headers.common['authorization'] = res.data.token
  await localStorage.setItem('token', res.data.token)
  dispatch({ type: AUTHENTICATED, payload: res.data })
  callback()
}

export {
  getUser,
  register,
  login,
  changeInput
}
