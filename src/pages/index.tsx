import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/atoms/Button'
import { Flex } from '../components/atoms/Flex/style'
import { Input } from '../components/atoms/Input/style'
import Loader from '../components/atoms/Loader'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cardappio</title>
      </Head>

    <main>
      <Flex width='40vw' height='100vh' bgColor='white'>
          <p>teste</p>
      </Flex>
    </main>
    </div>
  )
}

export default Home
