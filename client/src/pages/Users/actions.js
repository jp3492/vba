import axios from 'axios'

import {
  AUTHENTICATED
} from './types'

const setAuthorization = token => {
  axios.defaults.headers.common['Authorization'] = token
  console.log(axios.defaults.headers.common);
}

const register = (form, callback) => async dispatch => {
  const res = await axios.post('/auth/register', { email: form.email, password: form.password })
  dispatch({ type: AUTHENTICATED, payload: res.data.token })
  setAuthorization(res.data.token)
  callback()
}

const login = (form, callback) => async dispatch => {
  const res = await axios.post('/auth/login', { email: form.email, password: form.password })
  dispatch({ type: AUTHENTICATED, payload: res.data.token })
  setAuthorization(res.data.token)
  callback()
}

export {
  register,
  login
}
