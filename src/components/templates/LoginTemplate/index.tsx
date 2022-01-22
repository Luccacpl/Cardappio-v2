import React, { useState } from 'react'
import Image from 'next/image'

import LoginContent from '../../organisms/LoginContent'
import RegisterContent from '../../organisms/RegisterContent'

import { Flex } from '../../atoms/Flex/style'
import theme from '../../../styles/theme'

import Fundo from '/public/Images/Fundo.png';

const LoginTemplate: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <Flex
      width='100vw'
      height='100vh'
      flexDirection='row'
    >
      <Flex
        width='35vw'
        widthBigScreen='30vw'
        height='100vh'
        bgColor={theme.colors.loginBlack}
        padding='100px 60px'
        flexDirection='column'
      >
        {isRegister === false
          ?
          <LoginContent
            registerClicked={() => setIsRegister(true)}
          />
          :
          <RegisterContent
            loginClicked={() => setIsRegister(false)}
          />
        }
      </Flex>
      <Flex
        width='65vw'
        widthBigScreen='70vw'
        height='100vh'
        flexDirection='column'
      >
        <Image src={Fundo} sizes='100%' />
      </Flex>
    </Flex>
  )
}

export default LoginTemplate
