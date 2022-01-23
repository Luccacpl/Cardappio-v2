import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/organisms/Layout'



const Menu: React.FC = () => {

  const subMenuItems = [
    {
      id: 0,
      name: 'Bebidas',
    },
    {
      id: 1,
      name: 'Porções',

    },
    {
      id: 2,
      name: 'Frangos',
    },
    {
      id: 3,
      name: 'Carnes',
    },
  ]

  return (
    <div>
      <Head>
        <title>Cardappio - Menu</title>
      </Head>

     <Layout
      subMenuItems={subMenuItems}
      hasAddButton={true}
    >
       <p>CARDÁPIO</p>
     </Layout>
    </div>
  )
}

export default Menu
