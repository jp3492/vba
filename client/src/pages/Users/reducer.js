import {
  AUTHENTICATED,
  GET_USER
} from './types'

const INITIAL_STATE = {
  user: null,
  token: null
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case AUTHENTICATED:
      return { ...state, token: payload }
    case GET_USER:
      return { ...state, user: payload }
    default:
      return state
  }
}
