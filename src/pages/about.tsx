import AboutHero from "../components/AboutComponents/AboutHero"
import GrowthStory from "../components/AboutComponents/GrowthStory"
import Banner from "../components/Banner"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const about = () => {
  return (
    <>
      <Header />
      <Banner title='Sobre nosotros' subtitle='Bienvenido' />
      <AboutHero />
      <GrowthStory />
      <CallToAction />
      <Footer />
    </>
  )
}

export default about