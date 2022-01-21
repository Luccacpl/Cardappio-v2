import { Flex } from '../Flex/style'
import { Spinner, Content, Wrapper} from './style'

const Loader = () => (
  <Wrapper height="100vh" alignItems="flex-end" justifyContent="center">
    <Content height="65%">
      <Flex justifyContent="center" alignItems="center" flex="1">
        <Spinner />
      </Flex>
    </Content>
  </Wrapper>
)

export default Loader
