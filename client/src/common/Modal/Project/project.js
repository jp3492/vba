import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import Header from '../common/Header'
import Body from '../common/Body'
import Footer from '../common/Footer'

import { addFolder, updateFolder } from './project.actions'

import { Form, Select, Option } from './project.elements'

class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      id: null,
      folder: null,
      projects: [],
      links: [],
      processing: false
    }
    this.changeInput = this.changeInput.bind(this)
  }
  componentWillMount(){
    const { match: { params: { type, id } }, projects, folders } = this.props    
    if (type === 'folder' && id !== 'new') {
      const thisFolder = folders.filter( f => { return f._id === id })
      if (thisFolder.length === 0) {
        return
      }
      this.setState({ 
        name: thisFolder[0].name, 
        description: thisFolder[0].description,
        id: thisFolder[0]._id, 
        folder: thisFolder[0].folder
      })
    } else if (type === 'project' && id !== 'new') {
      const project = projects.filter( p => { return p._id === id })
      if (project.length === 0) {
        return
      }
      this.setState({
        name: project[0].name, 
        description: project[0].description,
        id: project[0]._id, 
        folder: project[0].folder
      })
    }
  }
  renderForm(){
    const { folders } = this.props
    const { name, description, folder } = this.state
    const thisFolder = folder === null ? [{name: 'Main'}]: folders.filter( f => { return f._id === folder })    
    return (
      <Form>
        <input type="text" placeholder="Name" value={name} onChange={ e => this.changeInput('name', e.target.value) } />
        <input type="text" placeholder="Description" value={description} onChange={ e => this.changeInput('description', e.target.value) } />
        <input type="text" disabled={true} value={thisFolder[0].name} />
      </Form>
    )
  }
  buttons(title){
    const { action: { addFolder, updateFolder }, history: { goBack } } = this.props
    const { folder, name, description, id } = this.state
    const data = { name, description, folder, id } 
    return title === 'New Folder' ?
    [
      { type: 'add', name: 'Add Folder', action: () => { 
        this.setState({ processing: true })
        addFolder(data, () => { 
          this.setState({ processing: false })
          goBack() 
        }) 
      }}
    ]: title === 'Edit Folder' ?
    [
      { type: 'add', name: 'Add Folder', action: () => updateFolder(data, () => { 
        this.setState({ processing: false })
        goBack() 
      }) }
    ]: []
  }
  changeInput(key, value){
    this.setState({
      [key]: value
    })
  }
  render(){
    const { history: { goBack }, match: { params: { id, type } } } = this.props
    const title = type === 'folder' ?
      id === 'new' ? 'New Folder': 'Edit Folder':
      id === 'new' ? 'New Project': 'Edit Project'
    return (
      <div id="project" onClick={ e => e.stopPropagation()}>
        <Header title={title} goBack={goBack} />
        <Body component={this.renderForm()} isLoading={this.state.processing} />   
        <Footer buttons={this.buttons(title)} isLoading={this.state.processing} />
      </div>
    )
  }
}

const mapStateToProps = ({ projects: { folders, projects } }) => {
  return { folders, projects }
}
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ addFolder, updateFolder }, dispatch), dispatch }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))
