import React from 'react'
import styled from 'styled-components'

import getVariable from '../../../variables'
import Spinner from '../../Spinner';

const StyledBody = styled.div`
  position: relative;
  grid-area: modalBody;
  padding: ${getVariable('margins', 'medium')};
  background-color: ${getVariable('colors', 'text_light')}
`
const SpinnerOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${getVariable('colors', 'divider')};
  top:0;
  left: 0;
  display: grid;
  place-items: center;
`

export default function({component, isLoading}){  
  return (
    <StyledBody>
      {component}
      {
        isLoading === true ?
        <SpinnerOverlay>
          <Spinner />
        </SpinnerOverlay>:
        null
      }
    </StyledBody>
  )
}
