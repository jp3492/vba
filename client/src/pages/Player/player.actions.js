import axios from 'axios'

import {
  GETTING_USER,
  GET_USER
} from './player.types'

const getUser = () => async dispatch => {
  dispatch({ type: GETTING_USER })
  const res = await axios.get('/auth/user')
  dispatch({ type: GET_USER, payload: res.data })
}

export {
  getUser
}
