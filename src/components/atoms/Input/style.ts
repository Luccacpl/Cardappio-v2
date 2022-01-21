import styled from 'styled-components'

interface IInput {
  bgColor?: string
  width?: string
  height?: string
  fontWeight?: string
  fontSize?: string
  color?: string
  display?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  marginBottom?: string
  margin?: string
}

const Input = styled.input<IInput>`
  background-color: ${props => props.bgColor || props.theme.colors.backgroundInput};
  outline: none;
  border: 0.1px solid transparent;
  min-width: 200px;
  border-radius: 5px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '45px'};
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || 'rgba(255, 255, 255, 0.7)'};
  padding: 15px;
  display: ${props => props.display || 'flex'};
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-right: ${props => props.marginRight}
  margin: ${props => props.margin};
  transition: all 0.3s;
  &:focus {
    border: 0.1px solid transparent;
    transition: all 0.3s;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`

export { Input }
