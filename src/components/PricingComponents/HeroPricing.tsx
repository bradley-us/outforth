import Image from "next/image"
import { Box, Container, FlexColumnContainer, FlexRowContainer, Subtitle, Text, Title } from "../../styles/Global/Components"
import { PrimaryContainer } from "../../styles/Global/PrimaryContainer"
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation"

const HeroPricing = () => {
  return (
    <PrimaryContainer>
      <Container gridColumns='2' py={100}>

        <FlexColumnContainer gap='5' align='flex-start' width={'100%'}>
          <Subtitle bold>Subtitle to add</Subtitle>
          <Box width={'100%'} py={'0px'} px={'0px'}>
            <FlexColumnContainer width={'100%'}>
              <Box
                py={14}
                br='10px 10px 0 0'
                width={'100%'}
                bgColor='black'
                color='white'
              >Servicios</Box>

              <Box py={40} px={40} width={'100%'}>
                <FlexColumnContainer gap='5' align='flex-start' width={'100%'}>
                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Digital Marketing
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Servicios de Software
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Mantenimiento de webs
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Copywriting
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Facebook Ads (Anuncios)
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Aplicación móvil
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Aplicación web
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Landing Page
                  </Box>

                  <Box
                    fontSize={14}
                    br={10}
                    bgColor='black'
                    bold
                    color='white'
                  >
                    Ecommerce
                  </Box>
                </FlexColumnContainer>
              </Box>
            </FlexColumnContainer>
          </Box>
        </FlexColumnContainer>

        <div style={{position: 'relative', width: '100%'}}>
          <BackgroundAnimation />
          <div style={{ position: 'absolute', top: 0, padding: '30px 40px'}}>
            <Title>
              ¡Haz crecer tu empresa!
            </Title>
            <Subtitle>¿Te imaginas a tí mismo con tu app?</Subtitle>
            <br/>
            <br/>
            <br/>
            <Image src='/assets/imgs/stack_devices.png' width={300} height={200} alt='Outforth logo' />
          </div>
        </div>
      </Container>
    </PrimaryContainer>
  )
}

export default HeroPricing