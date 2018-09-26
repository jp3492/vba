import styled from 'styled-components'
import getVariable from '../../variables'
import getStyle from '../../globalStyles';

const ProjectPage = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;

`
const FolderPath = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${getVariable('margins', 'small')};
`
const Path = styled.ul`
  flex: 1;
  list-style-type: none;
  display: flex;
`
const Step = styled.li`
  height: 40px;
  line-height: 40px;
  margin-right: ${getVariable('margins', 'medium')};
  cursor: pointer;
`

const AddFolder = styled.button`
  ${getStyle('buttons', 'normal')}
  font-size: 14px;
  background-color: ${getVariable('colors', 'primary')}
`
const EditFolder = styled.button`
  ${getStyle('buttons', 'normal')}
  font-size: 14px;
  background-color: ${getVariable('colors', 'red')};
  margin-right: ${getVariable('margins', 'medium')};
`

const Folders = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  flex-wrap: wrap;
`

const Folder = styled.li`
  width: auto;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  background-color: ${getVariable('colors', 'light')};
  margin-right: ${getVariable('margins', 'medium')};
  padding-right: ${getVariable('margins', 'medium')};
  padding-left: ${getVariable('margins', 'medium')};
  cursor: pointer;
`

export {
  ProjectPage,
  FolderPath,
  Path,
  Step,
  AddFolder,
  EditFolder,
  Folders,
  Folder
}