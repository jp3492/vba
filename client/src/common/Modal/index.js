import React from 'react'

import Auth from './Auth'
import Player from './Player'
import User from './User'
import Project from './Project'

import {
  StyledModal
} from './elements'

export default function (props) {
  const { match: { params, path } } = props
  const useModal =
    (path.includes('welcome') === true) ? <Auth />:
    (path.includes('projects') === true) ? <Project />:
    (path.includes('user') === true) ? <User />:
    Project
  return (
    <StyledModal>
      {useModal}
    </StyledModal>
  )
}
