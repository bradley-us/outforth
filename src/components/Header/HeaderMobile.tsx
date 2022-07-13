import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ButtonGradient } from '../../styles/Global/Button'
import { ContainerMobile, Section } from './HeaderStyles'

import styles from './Header.module.css'

const HeaderMobile = () => {

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
        <Image src='/assets/logo/web_outforth.svg' width={170} height={50} alt='Outforth Logo' />
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

              <li className={`${true ? styles.activeRoute: null}`}>Home</li>
              <li className={`${false ? styles.activeRoute: null}`}>Pricing</li>
              <li className={`${false ? styles.activeRoute: null}`}>About</li>
              <li className={`${false ? styles.activeRoute: null}`}>Contact</li>
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