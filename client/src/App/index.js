import React from 'react'
import styled from 'styled-components'
import './htmlStyle.css'
import getVariable from '../variables'

const App = styled.div`
  display: grid;
  padding: 0px;
  grid-template-rows: 60px 1fr auto;
  grid-column-gap: ${getVariable('margins', 'medium')};
  grid-row-gap: ${getVariable('margins', 'medium')};
  @media (min-width: 1025px) {
    grid-template-columns: auto 1025px auto;
    grid-template-areas:
    "header header header"
    ". body ."
    "footer footer footer";
  };
  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-areas:
    "header"
    "body"
    "footer";
  }
  h3, ul {
    margin: 0;
    padding: 0;
  }
`


export default ({ children }) => {
  return (
    <App>
      {children}
    </App>
  )
}
