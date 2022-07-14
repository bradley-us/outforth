import { NextPage } from 'next'
import React from 'react'
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import CallToAction from '../components/CallToAction'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroPricing from '../components/PricingComponents/HeroPricing'

const Pricing: NextPage = () => {
  return (
    <>
      <Header />
      <HeroPricing />
      <CallToAction />
      <Faqs />
      <Footer />
    </>
  )
}

export default Pricing