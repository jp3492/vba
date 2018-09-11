import {
  AUTHENTICATED,
  GETTING_USER,
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
      return { ...state, token: payload.token }
    case GETTING_USER:
      return { ...state, user: 'getting' }
    case GET_USER:
      return { ...state, user: payload }
    default:
      return state
  }
}
