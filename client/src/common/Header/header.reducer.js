import {
  NAVIGATE,
  DEVICE,
  MOBILE_NAV
} from './header.types'

const INITIAL_STATE = {
  nav: 'landing',
  device: null,
  mobileNavOpen: false
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case MOBILE_NAV:
      return { ...state, mobileNavOpen: !state.mobileNavOpen }
    case NAVIGATE:
      return { ...state, nav: payload, mobileNavOpen: false }
    case DEVICE:
      return { ...state, device: payload, mobileNavOpen: payload !== 'mobile' ? false: state.mobileNavOpen }
    default:
      return state
  }
}
