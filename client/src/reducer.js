import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './common/Modal/Auth/reducer'
import navigation from './common/Header/reducer'
// import files from './pages/FileManager/reducer'
// import player from './pages/VideoPlayer/reducer'

const appReducer = combineReducers({
  navigation,
  user,
  form: formReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
