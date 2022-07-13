import Image from 'next/image'
import React from 'react'
import { ButtonGradient } from '../../styles/Global/Button'
import { ContainerHeader, Section, SectionNav } from './HeaderStyles'

import styles from './Header.module.css'

const Header = () => {
  return (
    <ContainerHeader>
      <Section minWidth='110px'>
        <Image
          src='/assets/logo/web_outforth.svg'
          width={170}
          height={50}
          alt='Outforth Logo'
        />
      </Section>
      <SectionNav gridColumns='4'>
        <li className={`${true ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Home</li>
        <li className={`${false ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Pricing</li>
        <li className={`${false ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>About</li>
        <li className={`${false ? styles.activeRouteDesktop: null} ${' '} ${styles.li}`}>Contact</li>
      </SectionNav>
      <Section>
        <ButtonGradient color='black' fw='bold'>Contactar</ButtonGradient>
      </Section>
    </ContainerHeader>
  )
}

export default Header