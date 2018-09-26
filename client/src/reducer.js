import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './common/Modal/Auth/auth.reducer'
import project from './common/Modal/Project/project.reducer'
import projects from './pages/Projects/projects.reducer'
import navigation from './common/Header/header.reducer'
// import files from './pages/FileManager/reducer'
// import player from './pages/VideoPlayer/reducer'

const appReducer = combineReducers({
  project,
  projects,
  navigation,
  user,
  form: formReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = {
      navigation: {
        device: state.navigation.device
      }
    }
  }
  return appReducer(state, action)
}

export default rootReducer
