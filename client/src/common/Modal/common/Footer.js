import React from 'react'
import styled from 'styled-components'

import getVariable from '../../../variables'
import getStyle from '../../../globalStyles'

const StyledFooter = styled.div`
  grid-area: modalFooter;
  border-bottom-left-radius: ${getVariable('radius', 'small')};
  border-bottom-right-radius: ${getVariable('radius', 'small')};
  background-color: ${getVariable('colors', 'divider')};
  line-height: 60px;
  padding: ${getVariable('margins', 'medium')};
`

const StyledButton = styled.button`
  ${getStyle('buttons', 'normal')}
  float: right;
  background-color: ${getVariable('colors', 'primary')}
`

const button = (b, isLoading) => {
  const { type, action, name } = b
  return (
    <StyledButton type={type} onClick={() => action() } disabled={isLoading}>
      { isLoading === true ?
        '...':
        name
      }
    </StyledButton>
  )
}

export default function(props){
  const { agreement, buttons, isLoading } = props
  return (
    <StyledFooter>
      {agreement}
      {buttons.map( b => { return button(b, isLoading) } )}
    </StyledFooter>
  )
}
