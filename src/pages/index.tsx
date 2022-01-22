import type { NextPage } from 'next'
import Head from 'next/head'

import LoginTemplate from '../components/templates/LoginTemplate'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cardappio - Login</title>
      </Head>
      <LoginTemplate />
    </div>
  )
}

export default Home
