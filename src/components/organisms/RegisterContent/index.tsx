import React from 'react'

import { SubTitle, Title, P } from '../../atoms/Text/style'
import Button from '../../atoms/Button'
import { Input } from '../../atoms/Input/style'
import { Flex } from '../../atoms/Flex/style'
import theme from '../../../styles/theme'

interface IRegisterContent {
  loginClicked?: () => void
}


const RegisterContent = (props: IRegisterContent) => {
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
        Faça seu cadastro
      </SubTitle>
      <P
        fontWeight='400'
        fontSizeResponsive='18px'
        fontSize='14px'
        color={theme.colors.white}
        marginTop='16px'
      >
        Complete os campos abaixo para realizar o cadastro!
      </P>
      <Input
        placeholder='Digite seu nome'
        marginTop='28px'
      />
      <Input
        placeholder='Digite seu email'
        marginTop='28px'
      />
      <Input
        placeholder='Digite sua senha'
        marginTop='28px'
      />
      <Input
        type="date"
        placeholder='Digite data'
        marginTop='28px'
      />
      <Input
        placeholder='Digite o nome do restaurante'
        marginTop='28px'
      />

      <Button content='Entrar' width='100%' marginTop='28px' />

      <hr style={{ marginTop: '46px', border: '1px solid #2C2C2C' }} />
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        margin='32px 0'
      >
        <P color={theme.colors.white}>Ja possui uma conta?</P>
        <P
          color={theme.colors.orange}
          marginTop='12px'
          onClick={props.loginClicked}
          style={{ cursor: 'pointer' }}
        >
          Entre agora mesmo!
        </P>
      </Flex>
    </>
  )
}

export default RegisterContent
