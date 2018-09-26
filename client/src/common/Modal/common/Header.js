import React from 'react'
import styled from 'styled-components'

import getVariable from '../../../variables'

const StyledHeader = styled.div`
  grid-area: modalHeader;
  border-top-left-radius: ${getVariable('radius', 'small')};
  border-top-right-radius: ${getVariable('radius', 'small')};
  background-color: ${getVariable('colors', 'secondary')};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${getVariable('margins', 'medium')};
  > h1 {
    flex: 1;
    margin-right: ${getVariable('margins', 'medium')};
    margin: 0;
  }
`

export default function(props){
  const { title, path, push, goBack } = props
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <i className="material-icons" onClick={ () => goBack() }>clear</i>
    </StyledHeader>
  )
}
