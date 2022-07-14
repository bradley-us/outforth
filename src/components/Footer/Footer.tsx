import Image from 'next/image'
import Link from 'next/link'
import { Container, FlexColumnContainer, FlexRowContainer, SectionDivider, Text } from '../../styles/Global/Components'
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

        <FlexColumnContainer width={'100%'} mt>
          <br/>
          <SectionDivider width={100} />
          <br/>
          <Image
            src='/assets/logo/outforth_logo.svg'
            width='250'
            height='140'
            alt='Outforth Logo'
          ></Image>
        </FlexColumnContainer>
      </Container>
    </PrimaryContainer>

    <PrimaryContainer
      bgColor='#001D36'
    >
      <Container gridColumns='1' py={30} pyMD={20}>
        <FlexColumnContainer color='#A7CBE5'>
          <Text fontSize={20} fontSizeMD={16} bold>2022 © Outforth IT Services</Text>
          <FlexRowContainer width={'100%'} color='#A7CBE5' gap={0}>
            <Text fontSizeMD={12}><Link href='/terms-and-conditions'><a>Términos y Condiciones de uso</a></Link></Text>
            <Text ml mlMD fontSizeMD={12}><Link href='/legal-warning-and-privacy'><a>Aviso legal y políticas de privacidad</a></Link></Text>
          </FlexRowContainer>
        </FlexColumnContainer>
      </Container>
    </PrimaryContainer>
    </>
  )
}

export default Footer