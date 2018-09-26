import axios from 'axios'

import {
  SELECT_FOLDER,
  SELECT_PROJECT
} from './projects.types'

const selectFolder = id => dispatch => {
  dispatch({ type: SELECT_FOLDER, payload: id })
}

const selectProject = id => dispatch => {
  dispatch({ type: SELECT_PROJECT, payload: id })
}

export {
  selectFolder,
  selectProject
}
