import getVariable from './variables'

const getStyle = (key, value) => {
  return styles[key][value]
}

const styles = {
  form: {
    modal: `
      grid-area: body;
      width: auto;
      > a {
        width: 100%;
        height: 40px;
      };
      > input {
        width: 100%;
        height: 40px;
        border: none;
        margin-bottom: ${getVariable('margins', 'small')};
        border-bottom: 1px solid ${getVariable('colors', 'divider')};
      }
    `
  },
  buttons: {
    normal: `
    height: 40px;
    line-height: 40px;
    border-radius: ${getVariable('radius', 'small')};
    color: ${getVariable('colors', 'text_light')};
    border: none;
    cursor: pointer;
    padding-left: ${getVariable('margins', 'medium')};
    padding-right: ${getVariable('margins', 'medium')};
    &:hover {
      color: ${getVariable('colors', 'orange')}
    }
    `
  }
}

export default getStyle