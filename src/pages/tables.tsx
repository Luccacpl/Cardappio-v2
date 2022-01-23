import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/organisms/Layout'

const Tables: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cardappio - Tables</title>
      </Head>

     <Layout hasAddButton={false}>
       <p>MESAS</p>
     </Layout>
    </div>
  )
}

export default Tables
