import styled from 'styled-components'

const StyledModal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: grey;
  opacity: 0.3;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  cursor: pointer;
  grid-template-areas:
    "modal";
  > div {
    grid-area: modal;
    place-self: center;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 60px auto 60px;
    grid-template-areas:
      "modalHeader"
      "modalBody"
      "modalFooter"
  }
`

export {
  StyledModal
}
