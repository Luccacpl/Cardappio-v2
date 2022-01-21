import styled from 'styled-components';

interface IP {
    fontSize?: string
    color?: string
    fontWeight?: string
    marginTop?: string
    marginLeft?: string
    textAlign?: string
    fontSizeResponsive?: string
    marginLeftResponsive?: string
}

interface ITitle {
    fontSize?: string
    color?: string
    fontWeight?: string
    marginTop?: string
    marginLeft?: string
    fontFamily?: string
    fontSizeResponsive?: string
    marginLeftResponsive?: string
    marginBottom?: string
}

const P = styled.p<IP>`
    font-size: ${props => props.fontSize || '14px'};
    color: ${props => props.color || props.theme.colors.backgroundBlack};
    font-weight: ${props => props.fontWeight || '400'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    text-align: ${props => props.textAlign};
    @media screen and (min-width: 1281px){
        font-size: ${props => props.fontSizeResponsive || '18px'};
        margin-left: ${props => props.marginLeftResponsive};
    }
`

const Title = styled.h1<ITitle>`
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize || '24px'};
    color: ${props => props.color || props.theme.colors.backgroundBlack};
    font-weight: ${props => props.fontWeight || '500'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    @media screen and (min-width: 1481px){
        font-size: ${props => props.fontSizeResponsive || '40px'};
        margin-left: ${props => props.marginLeftResponsive};
    }
`

const SubTitle = styled.h1<ITitle>`
    font-size: ${props => props.fontSize || '20px'};
    color: ${props => props.color || props.theme.colors.backgroundBlack};
    font-weight: ${props => props.fontWeight || '500'};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    @media screen and (min-width: 1481px){
        font-size: ${props => props.fontSizeResponsive || '24px'};
        margin-left: ${props => props.marginLeftResponsive};
    }
`

export { P, Title, SubTitle }
