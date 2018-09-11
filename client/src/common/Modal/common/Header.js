import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  grid-area: modalHeader;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  background-color: var(--secondary);
`

export default function(props){
  const { title, path, push } = props
  return (
    <StyledHeader>
      <h3>{title}</h3>
      <i className="material-icons">clear</i>
    </StyledHeader>
  )
}
