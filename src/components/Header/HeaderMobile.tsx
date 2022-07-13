import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ButtonGradient } from '../../styles/Global/Button'
import { ContainerMobile, Section } from './HeaderStyles'

import styles from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const HeaderMobile = () => {

  const router = useRouter();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)

  const modalContainer = useRef(null)

  const handleModalContainer = () => {
    if(modalContainer.current) {
      setIsMenuMobileOpen(prevState => !prevState)
    } else {
      return
    }
  }

  const handleMenuBar = () => {
    setIsMenuMobileOpen(prevState => !prevState)
  }

  return (
    <ContainerMobile>
      <Section minWidth='120px'>
        <Link href='/'>
          <a>
            <Image src='/assets/logo/web_outforth.svg' width={170} height={50} alt='Outforth Logo' />
          </a>
        </Link>
      </Section>

      <Section minWidth='30px'>
        <figure onClick={handleMenuBar} className={styles.iconsNav}>
          <Image
            src='/assets/icons/menu-bar.svg'
            width={100}
            height={100}
            alt='Outforth Logo'
          />
        </figure>
      </Section>

      { isMenuMobileOpen ? (
        <>
          <div onClick={handleModalContainer} ref={modalContainer} className={styles.modalContainer}>
          </div>
          
          <div className={styles.mobNavContainer}>
            <ul>

              <div>
                <figure onClick={handleMenuBar} className={styles.iconsNav}>
                  <Image
                    src='/assets/icons/close-cross.svg'
                    width={'100%'}
                    height={'100%'}
                    alt='Close tag icon'
                  />
                </figure>
              </div>

              <Link href='/'><li className={`${router.asPath === '/' ? styles.activeRouteMobile : null} ${' '} ${styles.li}`}>Home</li></Link>
              <Link href='/pricing'><li className={`${router.asPath === '/pricing' ? styles.activeRouteMobile : null} ${' '} ${styles.li}`}>Pricing</li></Link>
              <Link href='/about'><li className={`${router.asPath === '/about'? styles.activeRouteMobile : null} ${' '} ${styles.li}`}>About</li></Link>
              <Link href='/contact'><li className={`${router.asPath === '/contact' ? styles.activeRouteMobile : null} ${' '} ${styles.li}`}>Contact</li></Link>
              <li>
                <ButtonGradient color='black' fw='bold'>Contactar</ButtonGradient>
              </li>
            </ul>
          </div>
        </>
      ) :
      null
      }
    </ContainerMobile>
  )
}



export default HeaderMobile