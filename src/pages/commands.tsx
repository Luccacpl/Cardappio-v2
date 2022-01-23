import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/organisms/Layout'

const Commands: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cardappio - Users</title>
      </Head>

     <Layout>
       <p>COMANDAS</p>
     </Layout>
    </div>
  )
}

export default Commands
