import React, { useState } from 'react'
import { useRouter } from 'next/router'

import theme from '../../../styles/theme'
import { Flex } from '../../atoms/Flex/style'
import { P, SubTitle } from '../../atoms/Text/style'

interface ISubMenuItems {
  id: number
  name: string
}

interface IAsideMenu {
  subMenuItems: ISubMenuItems[]
  hasAddButton: boolean
}

const AsideSubMenu = (props: IAsideMenu) => {

  const router = useRouter()
  const [isSelected, setIsSelected] = useState('')

  return (
    <Flex
      flexDirection='column'
      bgColor={theme.colors.grey}
      width='25vw'
    >
      <Flex
        flexDirection='column'
        width='100%'
        height='20%'
        bgColor={theme.colors.orange}
        padding='60px 0 0 30px'
      >
        <SubTitle
          color={theme.colors.white}
          fontSize='20px'
        >
          Gerenciamento de
          {router.pathname === '/menu'
            ? ' Cardápio'
            : router.pathname === '/commands'
              ? ' Comandas'
              : router.pathname === '/tables'
                ? '  Mesas'
                : ' Pedidos'
          }
        </SubTitle>
        <P
          marginTop='16px'
          fontSize='14px'
          fontSizeResponsive='18px'
          color={theme.colors.white}
          fontWeight='300'
        >
          4 {router.pathname === '/menu'
            ? ' categorias achadas'
            : router.pathname === '/commands'
              ? ' comandas achadas'
              : router.pathname === '/tables'
                ? '  mesas achadas'
                : ''
          }
        </P>
      </Flex>
      <Flex
        flexDirection='column'
        alignItems='flex-end'
        width='100%'
        height='80%'
        padding='30px 0 0 60px'
      >
        <Flex
          flexDirection='row'
          alignItems='center'
          padding='0 0 0 13px'
          height='50px'
          width='100%'
          borderRadius='5px 0 0 5px'
        >
          <P
            color={theme.colors.white}
            fontWeight='500'
            fontSize='16px'
            fontSizeResponsive='20px'
          >
            {router.pathname === '/menu'
              ? 'Categorias'
              : router.pathname === '/commands'
                ? 'Comandas'
                : router.pathname === '/tables'
                  ? 'Mesas'
                  : ''
            }
          </P>
        </Flex>
        {props.subMenuItems?.map(({ name, id }) => (
          <Flex
            key={id}
            flexDirection='row'
            alignItems='center'
            margin='12px 0 0 0'
            padding='0 0 0 13px'
            bgColor={isSelected !== name ? 'transparent' : theme.colors.backgroundBlack}
            height='40px'
            heighBigScreen='50px'
            width={isSelected !== name ? '100%' : '98%'}
            borderRadius='5px 0 0 5px'
            style={{ cursor: 'pointer' }}
            onClick={() => setIsSelected(name)}
          >
            <P
              color={theme.colors.green}
              fontWeight='400'
              fontSize='14px'
              fontSizeResponsive='18px'
            >
              {name}
            </P>
          </Flex>
        ))}
        {props.hasAddButton === true && (
          <Flex
            flexDirection='row'
            alignItems='center'
            margin='12px 0 0 0'
            padding='0 0 0 13px'
            height='40px'
            heighBigScreen='50px'
            width='100%'
            borderRadius='5px 0 0 5px'
            style={{ cursor: 'pointer' }}
          >
            <P
              color={theme.colors.green}
              fontWeight='400'
              fontSize='14px'
              fontSizeResponsive='18px'
            >
              + Adicionar nova Categoria
            </P>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default AsideSubMenu
