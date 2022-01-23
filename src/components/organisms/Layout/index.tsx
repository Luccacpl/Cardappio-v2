import React, { ReactNode } from 'react'

import { Flex } from '../../atoms/Flex/style'
import AsideMenu from '../../molecules/AsideMenu'

interface ILayout {
  children?: ReactNode
}

const Layout = (props: ILayout) => {
  return (
    <Flex
      flexDirection='row'
      width='100vw'
      height='100vh'
    >
      <AsideMenu />
      <Flex width='25vw'>

      </Flex>
      <Flex width='65vw'>
        {props.children}
      </Flex>
    </Flex>
  )
}

export default Layout
