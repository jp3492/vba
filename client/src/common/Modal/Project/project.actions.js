import axios from 'axios'

import {
  ADDING_FOLDER,
  FOLDER_ADDED,
  UPDATING_FOLDER,
  FOLDER_UPDATED,
  REMOVING_FOLDER,
  FOLDER_REMOVED
} from './project.types'

const getProject = id => (dispatch, getState) => {
  const project = getState().projects.projects.filter( p => { return p._id === id })
  return project[0]
}

const getFolder = id => (dispatch, getState) => {  
  const folder = getState().projects.folders.filter( f => { return f._id === id })
  dispatch({ type: 'huuu' })
  return folder[0]
}

const addFolder = (folder, callback) => async dispatch => {
  dispatch({ type: ADDING_FOLDER })
  const res = await axios.post('/api/folder', folder)
  dispatch({ type: FOLDER_ADDED, payload: res.data })
  callback()
}

const updateFolder = folder => async dispatch => {
  dispatch({ type: UPDATING_FOLDER })
  const res = await axios.post(`/api/folder/${folder._id}`, folder)
  dispatch({ type: FOLDER_UPDATED, payload: res.data })
}

const removeFolder = id => async dispatch => {
  dispatch({ type: REMOVING_FOLDER })
  await axios.delete(`/folder/${id}`)
  dispatch({ type: FOLDER_REMOVED, payload: id })
}

export {
  addFolder,
  updateFolder,
  removeFolder,
  getFolder,
  getProject
}
