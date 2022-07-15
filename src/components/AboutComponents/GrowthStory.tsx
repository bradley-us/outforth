import Image from "next/image"
import { Box, Container, FlexColumnContainer, Subtitle, Text } from "../../styles/Global/Components"
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
          <Box
            bgGradient
            bgDir='right'
            bgColor1='#002747'
            bgColor2='#002747'
            bgColor3='#002747'
            br={'12px'}
            px={30}
            style={{ marginBottom: 20 }}
          >
            <Text
              fontSize={24}
              fontSizeMD={18}
              bold
              color='#00B2FF'
            >
              Cómo creció Outforth IT Services
            </Text>
          </Box>

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