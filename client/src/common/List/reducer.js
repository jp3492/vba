import {

} from './types'

const INITIAL_STATE = {

}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}
