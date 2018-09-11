import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  grid-area: modalFooter;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background-color: var(--divider);
  line-height: 60px;
`

const StyledButton = styled.a`
  height: 40px;
  border-radius: var(--radius);
  color: var(--text-light);
  ${props => props.save && css`
    background: var(--primary);
  `};
  ${props => props.delete && css`
    background: var(--red);
  `}
`

const button = b => {
  const { type, action, name } = b
  return (
    <StyledButton {type} onClick={action}>
      {name}
    </StyledButton>
  )
}

export default function(props){
  const { agreement, buttons } = props
  return (
    <StyledFooter>
      {agreement}
      {buttons.map( b => { return button(b) } )}
    </StyledFooter>
  )
}
