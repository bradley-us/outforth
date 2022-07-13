import { Button } from "../styles/Global/Button"
import { Container, FlexColumnContainer, Subtitle, Text } from "../styles/Global/Components"
import { PrimaryContainer } from "../styles/Global/PrimaryContainer"

const CallToAction = () => {
  return (
    <PrimaryContainer
      bgGradient
      bgDir="bottom left"
      bgColor1='#349CF9'
      bgColor2='#86DDED'
      bgColor3='#FDFFFE'
    >
      <Container gridColumns='1' py={100}>
        <FlexColumnContainer color="white">
          <Text bold>
            At your fingerprints
          </Text>

          <Subtitle bgColor1='#FFF' bgColor2='#FFF' bgColor3='#FFF'>
            Lightning fast prototyping
          </Subtitle>

          <Text>
            Most calendars are designed for teams. 
            Slate is designed for freelancers
          </Text>

          <Button style={{ marginTop: 50}} color='black' bgColor='#FFF'>
            Buy Now
          </Button>
        </FlexColumnContainer>
      </Container>
    </PrimaryContainer>
  )
}

export default CallToAction