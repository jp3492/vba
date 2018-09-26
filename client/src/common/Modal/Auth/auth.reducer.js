import {
  GETTING_USER,
  GET_USER,
  AUTHENTICATED,
  AUTHENTICATING,
  CHANGE_AUTH_INPUT
} from './auth.types'

const INITIAL_STATE = {
  user: null,
  token: null,
  authenticating: false,
  gettingUser: false,
  email: null,
  password: null
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case CHANGE_AUTH_INPUT:
      return { ...state, [payload.key]: payload.value }
    case AUTHENTICATING:
      return { ...state, authenticating: true }
    case AUTHENTICATED:
      return { ...state, token: payload.token, authenticating: false }
    case GETTING_USER:
      return { ...state, gettingUser: true }
    case GET_USER:
      return { ...state, user: payload, gettingUser: false }
    default:
      return state
  }
}
