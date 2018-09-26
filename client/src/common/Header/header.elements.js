import styled from 'styled-components'
import getVariable from '../../variables'

const StyledHeader = styled.div`
  grid-area: header;
  line-height: 60px;
  background-color: ${getVariable('colors', 'dark')};
  > div {
    display: flex;
    flex-direction: row;
    @media (min-width: 1025px) {
      width: 1025px;
      margin-left: auto;
      margin-right: auto;
    }
    > div {
      flex: 1;
    }
  };
`

const Logo = styled.h3`
  > a {
    font-size: 26px;
    cursor: pointer;
    color: ${getVariable('colors', 'text_light')};
    font-weight: normal;
    text-decoration: none;
  }
`

const Menu = styled.ul`
  list-style-type: none;
  float: right;
  display: flex;
  flex-direction: row;
`

const MenuIcon = styled.i`
  height: 60px;
  line-height: 60px;
  padding-left: ${getVariable('margins', 'large')};
  padding-right: ${getVariable('margins', 'large')};
  font-size: 36px;
  color: ${props => props.active === true ? getVariable('colors', 'orange'): getVariable('colors', 'text_light')};
  cursor: pointer;
  &:hover {
    color: var(--orange);
  };
  &:active {
    color: var(--light);
  }
`

const MenuItem = styled.li`
  padding-left: ${getVariable('margins', 'medium')};
  cursor: pointer;
  > a {
    text-decoration: none;
    color: ${getVariable('colors', 'text_light')};
    float: right;
    &:hover {
      color: ${getVariable('colors', 'orange')};
    };
    &:active {
      color: ${getVariable('colors', 'light')};
    }
  }
`
const MobileMenu = styled.ul`
  position: fixed;
  top: 60px;
  right: ${ props => props.isOpen === true ? '0px': '-150px' };
  background-color: ${getVariable('colors', 'divider')};
  width: auto;
  transition: 0.5s;
  overflow-x: hidden;
  z-index: 9;
`

const MobileMenuBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${getVariable('colors', 'divider')};
  opacity: 0.6;
  z-index: 8;
`

export {
  StyledHeader,
  Logo,
  Menu,
  MenuIcon,
  MenuItem,
  MobileMenu,
  MobileMenuBackdrop
}
