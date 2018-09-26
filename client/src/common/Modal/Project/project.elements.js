import styled from 'styled-components'
import getVariable from '../../../variables'
import getStyle from '../../../globalStyles';

const Form = styled.form`
  ${getStyle('form', 'modal')}
`

const Select = styled.select`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${getVariable('colors', 'divider')};
`

const Option = styled.option`

`

export {
  Form,
  Select,
  Option
}
