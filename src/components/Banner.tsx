import { Container, Subtitle, Title } from '../styles/Global/Components'
import { PrimaryContainer } from '../styles/Global/PrimaryContainer';
import styles from './Banner.module.css'

interface IBanner {
  title?: string;
  subtitle?: any;
}
const Banner = ({ title, subtitle }: IBanner) => {
  return (
    <div className={styles.bannerContainer}>
      <PrimaryContainer>
        <Container bannerPaddingY gridColumns='1'>
          <Title
            bgColor1='#FFF'
          >{ title }</Title>
          <Subtitle
            bgColor1='#FFF'
            bgColor3='#FFF'
          >{ subtitle }</Subtitle>
        </Container>
      </PrimaryContainer>
    </div>
  )
}

export default Banner