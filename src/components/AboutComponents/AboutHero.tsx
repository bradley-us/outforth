import Image from "next/image"
import { Container, FlexRowContainer, Subtitle } from "../../styles/Global/Components"
import { PrimaryContainer } from "../../styles/Global/PrimaryContainer"
import CardTeam from "../CardTeam"

const AboutHero = () => {
  return (
    <PrimaryContainer>
      <Container py={20} gridColumns='1'>
        <FlexRowContainer>
          <Subtitle
            bold
          >
            Outforth work team
          </Subtitle>
        </FlexRowContainer>
      </Container>
      <Container pyMD={120} py={100} gridColumns='2'>
        <CardTeam
          name='Bradley Ramirez'
          desc='Después te digo.'
          btnText='¡Contáctame ahora!'
          links={[1, 2, 3, 4]}
        />
        <CardTeam
          name='Alfonso Carbajo'
          desc='Después te diré quién soy en verdad.'
          btnText='¡Contáctame!'
          links={[1, 2]}
        />
      </Container>
    </PrimaryContainer>
  )
}

export default AboutHero