import { url } from 'inspector';
import styled from 'styled-components'

interface FlexProps {
  justifyContent?: string
  alignItems?: string
  height?: string
  margin?: string
  flexDirection?: string
  flexDirectionMobile?: string
  flex?: string
  displayMobile?: string
  marginMobile?: string
  widthMobile?: string
  minWidth?: string
  width?: string
  bgColor?: string
  padding?: string
  widthBigScreen?: string
  borderRadius?: string
  heighBigScreen?: string
}

const Flex = styled.div<FlexProps>`
  flex: ${props => props.flex};
  display: flex;
  background-color: ${props => props.bgColor};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  margin: ${props => props.margin};
  flex-direction: ${props => props.flexDirection};
  width: ${props => props.width};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  //RESPONSIVIDADE PARA TELA MAIOR
  @media screen and (min-width: 1481px) {
    width: ${props => props.widthBigScreen}
    height: ${props => props.heighBigScreen}
  }
  //RESPONSIVIDADE PARA CELULAR
  @media screen and (max-width: 768px) {
    flex-direction: ${props => props.flexDirectionMobile || 'column'};
    margin: ${props => props.marginMobile};
    display: ${props => props.displayMobile};
    justify-content: space-between;
    width: ${props => props.widthMobile};
    min-width: ${props => props.minWidth};
  }
`

export { Flex }
