import React from 'react'

import { SubTitle, Title, P } from '../../atoms/Text/style'
import Button from '../../atoms/Button'
import { Input } from '../../atoms/Input/style'
import { Flex } from '../../atoms/Flex/style'
import theme from '../../../styles/theme'



const LoginContent: React.FC = () => {
  return (
    <>
      <Title
        fontWeight='700'
        fontSize='30px'
        fontSizeResponsive='40px'
        color={theme.colors.orange}
        fontFamily='Quicksand'
      >
        Cardappio
      </Title>
      <SubTitle
        color={theme.colors.green}
        fontWeight='400'
        fontSizeResponsive='22px'
        fontSize='18px'
        marginTop='8px'
      >
        Seja Bem-Vindo!
      </SubTitle>
      <P
        fontWeight='400'
        fontSizeResponsive='18px'
        fontSize='14px'
        color={theme.colors.white}
        marginTop='16px'
      >
        Por favor faça o seu login para ter acesso!
      </P>
      <Input
        placeholder='Digite o seu email'
        marginTop='28px'
      />
      <Input
        placeholder='Digite sua senha'
        marginTop='12px'
      />
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        margin='18px 0'
      >
        <Button content='Entrar' width='40%' />
        <P
          color={theme.colors.orange}
          fontSize='14px'
          fontSizeResponsive='18px'
        >
          Esqueci a minha senha
        </P>
      </Flex>
      <hr style={{ marginTop: '46px', border: '1px solid #2C2C2C' }} />
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        margin='32px 0'
      >
        <P color={theme.colors.white}>Ainda não tem sua conta?</P>
        <P color={theme.colors.orange} marginTop='12px'>Crie agora mesmo!</P>
      </Flex>
    </>
  )
}

export default LoginContent
