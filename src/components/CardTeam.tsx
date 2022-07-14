import Image from 'next/image'
import React from 'react'
import { ButtonGradient } from '../styles/Global/Button'
import { Box, Container, FlexColumnContainer, FlexRowContainer, ImgWrapper, Text } from '../styles/Global/Components'

interface ICardTeam {
  imgPath?: string;
  name?: string;
  desc?: string;
  btnText?: string;
  links?: any[];
}
const CardTeam = ({ imgPath = '/assets/img_test.jpg', name = 'Name', desc = 'Description', btnText = 'Contactar', links = [1,2] }: ICardTeam) => {
  return (
    <FlexRowContainer width={'100%'}>
      <Box
        br={20}
        maxWidth={'400px'}
        width={'100%'}
        py={40}
        px={10}
      >
        <Container width={'100%'} gridColumns='1'>
          <Box
            px={'0px'}
            py={'0px'}
            br={50}
            maxWidth={'90px'}
            style={{ position: 'absolute', top: '-80px', left: 'calc(50% - 45px)' }}
          >
            <Image
              style={{ borderRadius: '50px'}}
              src={ imgPath }
              width={100}
              height={100}
              objectFit='cover'
              alt='Outforth Logo'
            />
          </Box>
          <Text
            bold
            style={{ marginTop: 40}}
            fontSize={20}
          >
            { name }
          </Text>
          <FlexColumnContainer style={{ marginTop: '2rem'}}>
            <Text
              color='#c7c7c7'
              fontSize={15}
            >
              { desc }
            </Text>

            <br/>

            <ButtonGradient
              fw='bold'
            >
              { btnText }
            </ButtonGradient>

            <FlexRowContainer
              width={'100%'}
              justify='space-around'
              style={{ marginTop: '3rem'}}
            >
              {
                links.map((link, i) => (
                  <a key={i}>
                    <ImgWrapper>
                      <Image
                        style={{ borderRadius: '50px'}}
                        src='/assets/img_test.jpg'
                        width={30}
                        height={30}
                        objectFit='cover'
                        alt='Outforth Logo'
                      />
                    </ImgWrapper>
                  </a>
                ))
              }
            </FlexRowContainer>
          </FlexColumnContainer>
        </Container>
      </Box>
    </FlexRowContainer>
  )
}

export default CardTeam