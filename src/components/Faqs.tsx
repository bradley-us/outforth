import Image from 'next/image'
import { useEffect, useState } from 'react'
import faqs from '../../public/faqs.json'
import { Button } from '../styles/Global/Button'
import { Container, FlexColumnContainer, FlexRowContainer, Subtitle, Text } from '../styles/Global/Components'
import { PrimaryContainer } from '../styles/Global/PrimaryContainer'
import Accordion from './Accordion'

const Faqs = () => {
  return (
    <PrimaryContainer bgGradient bgDir='right' bgColor1='#F7F7F7'>
      <Container py={80} gridColumns='1'>
        <Subtitle fontSize={45}>
          FAQS <span><Image src='/assets/icons/question.svg' width={30} height={30} alt='Question ?' /></span>
        </Subtitle>
        <Accordion items={faqs}></Accordion>
      </Container>
    </PrimaryContainer>
  )
}

export default Faqs