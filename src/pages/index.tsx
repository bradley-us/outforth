import type { NextPage } from 'next'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Features from '../components/HomeComponents/Features/Features'
import Hero from '../components/HomeComponents/Hero/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Home
