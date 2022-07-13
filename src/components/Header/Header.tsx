import { PrimaryContainer } from '../../styles/Global/PrimaryContainer'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  return (
    <PrimaryContainer>
      <HeaderDesktop />
      <HeaderMobile />
    </PrimaryContainer>
  )
}

export default Header