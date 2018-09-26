import {
  SELECT_FOLDER,
  SELECT_PROJECT
} from './projects.types'

import { FOLDER_ADDED } from '../../common/Modal/Project/project.types'

import {
  GET_USER
} from '../../common/Modal/Auth/auth.types'

const INITIAL_STATE = {
  search: null,
  gettingFolders: false,
  folders: [],
  filteredFolders: [],
  path: [],
  gettingProjects: false,
  projects: [],
  filteredProjects: []
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case FOLDER_ADDED:
      return { ...state, folders: [ ...state.folders, payload ]}
    case GET_USER:
      return { ...state, folders: payload.folders, projects: payload.projects }
    case SELECT_FOLDER:
      return { 
        ...state,
        path: payload === state.selectedFolder ? 
          state.path: payload === null ? 
          []: state.path.includes(payload) ? 
          state.path.slice(0, state.path.indexOf(payload)+1) :[ ...state.path, payload ] }
    case SELECT_PROJECT:
      return { ...state, selectedProject: payload }
    default:
      return state
  }
}
