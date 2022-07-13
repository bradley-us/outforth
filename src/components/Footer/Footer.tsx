import { Container, FlexColumnContainer, FlexRowContainer, Text } from '../../styles/Global/Components'
import { PrimaryContainer } from '../../styles/Global/PrimaryContainer'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <PrimaryContainer
      bgColor='#002747'
    >
      <Container gridColumns='1' py={100}>
        <FlexRowContainer justify='space-between'>
          <FlexColumnContainer
            align='flex-start'
            color='white'
            className={styles.footerSection}
          >
            <Text fontSize={24}>Pages</Text>
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </FlexColumnContainer>

          <FlexColumnContainer
            align='flex-start'
            color='white'
            className={styles.footerSection}
          >
            <Text fontSize={24}>Pages</Text>
            <li>contact</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </FlexColumnContainer>

          <FlexColumnContainer
            align='flex-start'
            color='white'
            className={styles.footerSection}
          >
            <Text fontSize={24}>Pages</Text>
            <li>contact</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </FlexColumnContainer>
        </FlexRowContainer>
      </Container>
    </PrimaryContainer>

    <PrimaryContainer
      bgColor='#001D36'
    >
      <Container gridColumns='1' py={30}>
        <FlexColumnContainer color='#A7CBE5'>
          <Text fontSize={20} bold>2022 © Outforth IT Services</Text>
          <FlexRowContainer color='#A7CBE5' gap={20}>
            <Text>Términos y Condiciones de uso</Text>
            |
            <Text>Aviso legal y políticas de privacidad</Text>
          </FlexRowContainer>
        </FlexColumnContainer>
      </Container>
    </PrimaryContainer>
    </>
  )
}

export default Footer