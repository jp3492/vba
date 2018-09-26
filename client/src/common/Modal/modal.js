import React from 'react'

import Auth from './Auth'
import Player from './Player'
import User from './User'
import Project from './Project/project'

import {
  Modal, ModalBackdrop
} from './modal.elements'

export default function (props) {
  const { match: { params, path }, history } = props
  const useModal =
    (path.includes('projects') === true) ? <Project />:
    (path.includes('user') === true) ? <User />:
    <Auth />
  return [
    <Modal onClick={() => history.goBack()}>
      {useModal}
    </Modal>,
    <ModalBackdrop />
  ]
}
