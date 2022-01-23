import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowBackOutline } from 'react-ionicons'

import theme from '../../../styles/theme'
import { Flex } from '../../atoms/Flex/style'
import { P, Title } from '../../atoms/Text/style'
import { menuItems } from '../../../utils/menuItems'

const AsideMenu = () => {

  const router = useRouter()

  return (
    <Flex
      flexDirection='column'
      justifyContent='space-between'
      padding='30px 0'
      width='10vw'
      bgColor={theme.colors.backgroundBlack}
    >
      <Flex
        flexDirection='row'
        width='100%'
        justifyContent='center'
        alignItems='center'
        padding='0px 12px'
      >
        <Title
          fontWeight='700'
          fontSize='18px'
          fontSizeResponsive='24px'
          color={theme.colors.orange}
          fontFamily='Quicksand'
        >
          Cardappio
        </Title>
      </Flex>
      <Flex
        flexDirection='column'
        alignItems='flex-end'
        height='250px'
        heighBigScreen='500px'
        width='100%'
      >
        {menuItems?.map(({ id, name, route }) => (
          <Flex
            key={id}
            flexDirection='row'
            alignItems='center'
            padding='0 0 0 13px'
            bgColor={router.pathname === route ? theme.colors.grey : 'transparent'}
            height='50px'
            width='85%'
            borderRadius='5px 0 0 5px'
            style={{ cursor: 'pointer' }}
          >
            <Link href={route}>
              <P color={theme.colors.green}>{name}</P>
            </Link>
          </Flex>
        ))}
      </Flex>
      <Flex
        flexDirection='row'
        justifyContent='center'
        height='50px'
        width='100%'
      >
        <Flex
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
          width='50px'
          bgColor={theme.colors.green}
          borderRadius='5px'
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          <ArrowBackOutline />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AsideMenu
