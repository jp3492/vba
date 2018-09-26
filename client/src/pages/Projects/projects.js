import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectFolder } from './projects.actions'
import { } from './projects.types'
import {
  ProjectPage,
  FolderPath,
  AddFolder,
  EditFolder,
  Path,
  Step,
  Folders,
  Folder
} from './projects.elements'

class Projects extends Component {
  render() {
    const { history: { push }, folders, action: { selectFolder }, path, search } = this.props
    const searchTerm = search === null ? 'all': search
    const selectedFolder = path.length > 0 ? path[path.length-1]: null
    const showFolders = folders.filter( f => { return f.folder === selectedFolder })
    const steps = path.map( p => {
      const thisFolder = folders.filter(f => { return f._id === p })
      return { _id: p, name: thisFolder[0].name }
    })
    return (
      <ProjectPage id="projects" key="projects">
        <FolderPath>
          <Path>
            <Step onClick={ () => {
                selectFolder(null)
                push('/projects/root'+'/'+searchTerm)
              }}>
              Main
            </Step>
            {
              steps.map( s => {
                return  (
                  <Step onClick={ () => { 
                    selectFolder(s._id)
                    push('/projects/'+s._id)
                  }}>
                    >{' '+s.name}
                  </Step>
                )
              })
            }
          </Path>
          {
            selectedFolder !== null ?
            <EditFolder type={'edit'} onClick={ () => push('/projects/all/folder/'+selectedFolder)}>
              Edit Folder
            </EditFolder>: null
          }
          <AddFolder type={'add'} onClick={ () => push('/projects/all/folder/new')}>
            Add Folder
          </AddFolder>
        </FolderPath>
        <Folders>
          {
            showFolders.map( f => { return (
            <Folder onClick={ () => selectFolder(f._id) }>
              {f.name}
            </Folder>
           )})
          }
        </Folders>
      </ProjectPage>
    )
  }
}

const mapStateToProps = ({ projects: { folders, selectedFolder, path, search }}) => {
  return { folders, selectedFolder, path, search }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ selectFolder }, dispatch), dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects)
