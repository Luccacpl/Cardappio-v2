import React, { ReactNode } from 'react'

import { Flex } from '../../atoms/Flex/style'
import AsideMenu from '../../molecules/AsideMenu'
import theme from '../../../styles/theme'
import AsideSubMenu from '../../molecules/AsideSubMenu'


interface ILayout {
  children?: ReactNode
  subMenuItems?: any
  hasAddButton: boolean
}

const Layout = (props: ILayout) => {
  return (
    <Flex
      flexDirection='row'
      width='100vw'
      height='100vh'
    >
      <AsideMenu />
      <AsideSubMenu
        subMenuItems={props.subMenuItems}
        hasAddButton={props.hasAddButton}
      />
      <Flex
        bgColor={theme.colors.backgroundBlack}
        width='65vw'>
        {props.children}
      </Flex>
    </Flex>
  )
}

export default Layout
