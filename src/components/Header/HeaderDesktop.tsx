import Image from 'next/image'
import { ButtonGradient } from '../../styles/Global/Button'
import { ContainerHeader, Section, SectionNav } from './HeaderStyles'

import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderDesktop = () => {

  const router = useRouter();

  return (
    <ContainerHeader>
      <Section minWidth='110px'>
        <Link href='/'>
            <Image style={{ cursor: 'pointer' }} src='/assets/logo/web_outforth.svg' width={170} height={50} alt='Outforth Logo' />
        </Link>
      </Section>
      <SectionNav gridColumns='4'>
        <Link href='/'><a><li className={`${router.asPath === '/' ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Home</li></a></Link>
        <Link href='/pricing'><a><li className={`${router.asPath === '/pricing' ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Pricing</li></a></Link>
        <Link href='/about'><a><li className={`${router.asPath === '/about'? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>About</li></a></Link>
        <Link href='/contact'><a><li className={`${router.asPath === '/contact' ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Contact</li></a></Link>
      </SectionNav>
      <Section>
        <ButtonGradient color='black' fw='bold'>Contactar</ButtonGradient>
      </Section>
    </ContainerHeader>
  )
}

export default HeaderDesktop