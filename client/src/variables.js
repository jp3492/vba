const getVariable = (type, value) => {
  return variables[type][value]
}

const variables = {
  colors: {
    primary: '#4CAF50',
    light: '#C8E6C9',
    dark: '#388E3C',
    secondary: '#00BCD4',
    text: '#212121',
    text_light: '#FFFFFF',
    divider: '#BDBDBD',
    orange:'#FF9800',
    red: '#F44336'
  },
  margins: {
    small: '5px',
    medium: '10px',
    large: '15px',
    xLarge: '30px'
  },
  radius: {
    small: '5px'
  }
}

export default getVariable