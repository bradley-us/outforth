import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderMobile />
    </>
  )
}

export default Home
