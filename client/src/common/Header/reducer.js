import {
  NAVIGATE,
  DEVICE
} from './types'

const INITIAL_STATE = {
  nav: 'landing',
  device: null
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case NAVIGATE:
      return { ...state, nav: payload }
    case DEVICE:
      return { ...state, device: payload }
    default:
      return state
  }
}
