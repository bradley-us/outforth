import Image from "next/image"
import { Container, FlexColumnContainer, Subtitle, Text } from "../../styles/Global/Components"
import { PrimaryContainer } from "../../styles/Global/PrimaryContainer"

const GrowthStory = () => {
  return (
    <PrimaryContainer>
      <Container gridColumns='1' py={100}>
        <FlexColumnContainer
          width={'100%'}
          align='flex-start'
          justify='flex-start'
        >
          <Subtitle>Cómo creció Outforth IT Services</Subtitle>
          <Text align='left' alignMD='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt placeat earum possimus deleniti ad excepturi? Explicabo rem, veniam laboriosam, minus quae quidem molestias blanditiis numquam culpa consequuntur, alias quaerat.
          </Text>
          <Text align='left' alignMD='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt placeat earum possimus deleniti ad excepturi? Explicabo rem, veniam laboriosam, minus quae quidem molestias blanditiis numquam culpa consequuntur, alias quaerat.
          </Text>
          <Text align='left' alignMD='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt placeat earum possimus deleniti ad excepturi? Explicabo rem, veniam laboriosam, minus quae quidem molestias blanditiis numquam culpa consequuntur, alias quaerat.
          </Text>
          <Image
            src='/assets/logo/outforth_logo.svg'
            width='400'
            height='230'
            alt='Outforth Logo'
          ></Image>
          <Subtitle>
            Quality | Improve | Best Performance
          </Subtitle>
        </FlexColumnContainer>
      </Container>
    </PrimaryContainer>
  )
}

export default GrowthStory