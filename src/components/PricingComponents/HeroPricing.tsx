import Image from "next/image"
import { Box, Container, FlexColumnContainer, FlexRowContainer, Subtitle, Text, Title } from "../../styles/Global/Components"
import { PrimaryContainer } from "../../styles/Global/PrimaryContainer"
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation"

import styles from './HeroPricing.module.css'

const HeroPricing = () => {
  return (
    <PrimaryContainer>
      <Container gridColumns='2' py={100}>

        <FlexColumnContainer align='flex-start' width={'100%'}>
          <Subtitle bold>Subtitle to add</Subtitle>
          <Text style={{ marginBottom: 50}} pl align="left" alignMD="left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam architecto culpa molestias consectetur consequatur officia dolores temporibus sunt totam quis, illo sequi numquam quo. Illum maxime dolorum repellat. Quaerat, vel.
          </Text>
          <Text style={{ marginBottom: 50}} pl align="left" alignMD="left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam architecto culpa molestias consectetur consequatur officia dolores temporibus sunt totam quis, illo sequi numquam quo. Illum maxime dolorum repellat. Quaerat, vel.
          </Text>

          <Box
            width={'100%'}
            py={'0px'}
            px={'0px'}
          >
            <FlexColumnContainer width={'100%'}>
              <Box
                py={14}
                br='10px 10px 0 0'
                width={'100%'}
                bgGradient
                bgDir='right'
                bgColor1='#48ACF6'
                bgColor2='#86DDED'
                color='white'
              >Servicios</Box>

              <Box br='0 0 10px 10px' py={40} px={40} width={'100%'}>
                <FlexRowContainer wrap gap={10} width={'100%'}>
                  <Box
                    fontSize={14}
                    br='10px'
                    bgColor='#1D95EB'
                    bold
                    color='white'
                  >
                    Digital Marketing
                  </Box>

                  <Box
                    fontSize={14}
                    br='10px'
                    bgColor='#D5A61C'
                    bold
                    color='white'
                  >
                    Servicios de Software
                  </Box>

                  <Box
                    fontSize={14}
                    br='10px'
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Mantenimiento de webs
                  </Box>
                </FlexRowContainer>
              </Box>
            </FlexColumnContainer>
          </Box>
        </FlexColumnContainer>

        <div className={styles.containerRelative}>
          <BackgroundAnimation />
          <div className={styles.containerAbsolute}>
            <Title>
              ¡Haz crecer tu empresa!
            </Title>
            <Subtitle>¿Te imaginas a tí mismo con tu app?</Subtitle>
            <br/>
            <br/>
            <br/>
            <Image src='/assets/imgs/stack_devices.png' width={300} height={200} alt='Stack devices' />
          </div>
        </div>
      </Container>
    </PrimaryContainer>
  )
}

export default HeroPricing