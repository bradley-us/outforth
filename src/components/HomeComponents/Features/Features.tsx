import Image from "next/image"
import { Container, FlexColumnContainer, FlexRowContainer, ImgWrapper, Subtitle, Text } from "../../../styles/Global/Components"
import { PrimaryContainer } from "../../../styles/Global/PrimaryContainer"

const Features = () => {
  return (
    <PrimaryContainer>
      <Container py={100} gridColumns='1'>
        <FlexColumnContainer>
          <p style={{fontWeight: 'bold'}}>At your fingertips</p>
          <Subtitle
            bold
            fontSize={36}
            bgColor1='#333'
            bgColor3='#666'
          >
            Features
          </Subtitle>
          <Text>
            Most calendars are designed for teams. 
            Slate is designed for freelancers
          </Text>
        </FlexColumnContainer>

        <FlexRowContainer mt>
          <Container gridColumns='1'>
            <ImgWrapper>
              <Image
                style={{ borderRadius: 15 }}
                src='/assets/img_test.jpg'
                alt='gg'
                width={900}
                height={450}
              />
            </ImgWrapper>
          </Container>

          <FlexColumnContainer gap={30} maxWidth={'350px'}>
            <FlexRowContainer gap={10} align='flex-start'>
              <ImgWrapper><Image src='/assets/icons/quality.svg' width={100} height={100} alt='Quality icon' /></ImgWrapper>
              
              <FlexColumnContainer align='flex-start'>
                <Text bold>At your fingertips</Text>
                <Text>
                  Slate helps you see how many 
                  more days you need to work to 
                  reach your financial goal. 
                </Text>            
              </FlexColumnContainer>
            </FlexRowContainer>

            <FlexRowContainer gap={10} align='flex-start'>
              <ImgWrapper><Image src='/assets/icons/trophy.svg' width={100} height={100} alt='Quality icon' /></ImgWrapper>
              
              <FlexColumnContainer align='flex-start'>
                <Text bold>At your fingertips</Text>
                <Text>
                  Slate helps you see how many 
                  more days you need to work to 
                  reach your financial goal. 
                </Text>            
              </FlexColumnContainer>
            </FlexRowContainer>
          </FlexColumnContainer>
        </FlexRowContainer>
      </Container>
    </PrimaryContainer>
  )
}

export default Features