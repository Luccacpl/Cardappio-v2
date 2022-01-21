import styled from 'styled-components'

interface CustomButtonProps {
    margin?: string
    height?: string
    width?: string
    color?: string
    fontWeight?: string
    fontSize?: string
    backgroundColor?: string
    padding?: string
    marginTop?: string
    widthResponsive?: string
    fontSizeResponsive?: string
    heightResponsive?: string
    BgColor?: string
}

const CustomButton = styled.button<CustomButtonProps>`
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    width: ${props => props.width || '10%'};
    height: ${(props) => props.height || '1.875rem'};
    min-height: 2rem;
    padding: ${props => props.padding || "0 20px"};
    background-color: ${props => props.BgColor || props.theme.colors.orange};
    color: ${props => props.color || props.theme.colors.white};
    border: 1px solid transparent;
    border-radius: 30px;
    outline: none;
    font-weight: ${props => props.fontWeight || '400'};
    font-size: ${props => props.fontSize || '14px'};
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform:  perspective(1px) scale(1.1);
      transition: all 0.2s;
    }
`

export default CustomButton
