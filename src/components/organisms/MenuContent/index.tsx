import React from 'react'

import { Flex } from '../../atoms/Flex/style'
import theme from '../../../styles/theme'
import { P, SubTitle } from '../../atoms/Text/style'



const MenuContent = () => {

  return(
    <Flex
      width='100%'
      height='25vh'
      bgColor={theme.colors.green}
      flexDirection='column'
    >
      <Flex
        width='100%'
        height='50%'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='flex-start'
        padding='0 60px'
      >
        <Flex
          height='100%'
          width='70%'
          flexDirection='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Flex
            height='60px'
            heighBigScreen='80px'
            width='60px'
            widthBigScreen='80px'
            borderRadius='50%'
            bgColor={theme.colors.backgroundBlack}
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
          >
            <p>svg</p>
          </Flex>
          <Flex
            flexDirection='column'
            margin='0 10px'
          >
            <SubTitle>Todos os seus pratos</SubTitle>
            <P
              marginTop='6px'
              fontSize='14px'
              fontSizeResponsive='16px'
            >
              Categoria:
            </P>
          </Flex>
        </Flex>
        <Flex
          height='100%'
          width='120px'
          bgColor={theme.colors.backgroundBlack}
          borderRadius='0 0 10px 10px'
        >

        </Flex>
      </Flex>
    </Flex>
  )
}

export default MenuContent
