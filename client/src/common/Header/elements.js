import styled from 'styled-components'

const StyledHeader = styled.div`
  grid-area: header;
  line-height: 60px;
  background-color: var(--dark);
  > a {
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
  @media (min-width: 1025px) {
    text-align: center;
  };
`

const StyledLogo = styled.h3`
  > a {
    font-size: 26px;
    cursor: pointer;
    color: var(--text-light);
    padding-left: var(--padding-l);
    padding-right: var(--padding-l);
    font-weight: normal;
    text-decoration: none;
  }
`

const StyledMenu = styled.ul`
  list-style-type: none;
  float: right;
  display: flex;
  flex-direction: row;
`

const StyledMenuIcon = styled.i`
  line-height: 60px;
  padding-left: var(--padding-l);
  padding-right: var(--padding-l);
  font-size: 36px;
  color: var(--text-light);
  cursor: pointer;
  &:hover {
    color: var(--orange);
  };
  &:active {
    color: var(--light);
  }
`

const StyledMenuItem = styled.li`
  padding-left: var(--padding-m);
  padding-right: var(--padding-m);
  cursor: pointer;
  > a {
    text-decoration: none;
    color: var(--text-light);
    &:hover {
      color: var(--orange);
    };
    &:active {
      color: var(--light);
    }
  }
`
export {
  StyledHeader,
  StyledLogo,
  StyledMenu,
  StyledMenuIcon,
  StyledMenuItem
}
