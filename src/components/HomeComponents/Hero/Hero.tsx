import Image from "next/image"
import { ButtonGradient } from "../../../styles/Global/Button"
import { Container, ContentWrapper, FlexColumnContainer, FlexRowContainer, ImgWrapper, Subtitle, Title } from "../../../styles/Global/Components"
import { PrimaryContainer } from "../../../styles/Global/PrimaryContainer"

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <PrimaryContainer
      flexbox
      >
      <div className={styles.bg}></div>
      <Container gridColumns='2' py={100}>
        <FlexColumnContainer align='start'>
          <Title
            bgColor1='#006BFF'
            bgColor2='#009DFC'
            bgColor3='#27E9F4'
          >
            Develop the future!
          </Title>
          <ContentWrapper maxWidth="380">
            <Subtitle pl>
              Most calendars are designed for teams. Slate is designed 
              for freelancers
            </Subtitle>
          </ContentWrapper>
          <Image
            src='/assets/logo/outforth_logo.svg'
            width='400'
            height='230'
            alt='Outforth Logo'
          ></Image>
          <FlexRowContainer width='100%' justify='flex-end'>
            <ButtonGradient
              fw='bold'
              color='#2091F9'
              bgColor1='#D3F8FF'
              bgColor2='#D8F8FF'
              bgColor3='#F1F1F1'
            >
              ¡Probar ahora!
            </ButtonGradient>
          </FlexRowContainer>
        </FlexColumnContainer>
        <FlexRowContainer>
          <ImgWrapper>
            <Image
              style={{ borderRadius: 15 }}
              src='/assets/img_test.jpg'
              alt='gg'
              width={900}
              height={450}
            />
          </ImgWrapper>
        </FlexRowContainer>
      </Container>
      {/* <Image
        src='/assets/bg/wave.svg'
        layout='responsive'
        width={100}
        height={0}
        alt='waves'
      /> */}
    </PrimaryContainer>
  )
}

export default Hero