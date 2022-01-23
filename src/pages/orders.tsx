import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/organisms/Layout'

const Orders: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cardappio - Orders</title>
      </Head>

     <Layout>
       <p>PEDIDOS</p>
     </Layout>
    </div>
  )
}

export default Orders
