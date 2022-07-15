import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, FlexColumnContainer, FlexRowContainer, SectionDivider, Text } from '../../styles/Global/Components'
import { PrimaryContainer } from '../../styles/Global/PrimaryContainer'
import styles from './Footer.module.css'

const Footer = () => {

  const router = useRouter()

  return (
    <>
    <PrimaryContainer
      bgColor='#002747'
    >
      <Container gridColumns='1' py={50}>
        <FlexRowContainer gap={20} align='flex-start' justify='space-around'>
          <FlexColumnContainer
            align='flex-start'
            color='white'
            className={styles.footerSection}
          >
            <Text align='left' alignMD='left' color='white' fontSize={24}>Pages</Text>
            <li><a onClick={() => router.push('/')}>Home</a></li>
            <li><a onClick={() => router.push('/pricing')}>Soluciones</a></li>
            <li><a onClick={() => router.push('/about')}>Sobre nosotros</a></li>
            <li><a onClick={() => router.push('/')}>Contactar</a></li>
          </FlexColumnContainer>

          <FlexColumnContainer
            align='flex-start'
            color='white'
            className={styles.footerSection}
          >
            <Text align='left' alignMD='left' color='white' fontSize={24}>L.O.P.D.</Text>
            <li><a onClick={() => router.push('/legal-warning-and-privacy')}>Aviso legal y privacidad</a></li>
            <li><a onClick={() => router.push('/pricing')}>Términos y condiciones de uso</a></li>
          </FlexColumnContainer>

          <div>
            <Image
              src='/assets/logo/outforth_logo.svg'
              width='200'
              height='100'
              alt='Outforth Logo'
            ></Image>
          </div>
        </FlexRowContainer>
      </Container>
    </PrimaryContainer>

    <PrimaryContainer
      bgColor='#001D36'
    >
      <Container gridColumns='1' py={20} pyMD={20}>
          <Text color='#A7CBE5' fontSize={20} fontSizeMD={16} bold>2022 © Outforth IT Services</Text>
      </Container>
    </PrimaryContainer>
    </>
  )
}

export default Footer