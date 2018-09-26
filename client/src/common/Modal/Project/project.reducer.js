import {
  CHANGE_PROJECT_INPUT,
  ADDING_FOLDER,
  FOLDER_ADDED,
  UPDATING_FOLDER,
  FOLDER_UPDATED,
  REMOVING_FOLDER,
  FOLDER_REMOVED
} from './project.types'

const INITIAL_STATE = {
  updatingFolders: false,
  id: null,
  name: null,
  description: null,
  keyWords: [],
  projects: [],
  parent: null
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case CHANGE_PROJECT_INPUT:
      return { ...state, [payload.key]: payload.value }
    case ADDING_FOLDER:
      return { ...state, updatingFolders: true }
    case FOLDER_ADDED:
      return { ...state, updatingFolders: false }
    case UPDATING_FOLDER:
      return { ...state, updatingFolders: true }
    case FOLDER_UPDATED:
      return { ...state, updatingFolders: false }
    case REMOVING_FOLDER:
      return { ...state, updatingFolders: true }
    case FOLDER_REMOVED:
      return { ...state, updatingFolders: false }
    default:
      return state
  }
}
