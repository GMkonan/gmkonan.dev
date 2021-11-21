import type { NextPage } from 'next'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Main from '../components/Main'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
    <NavBar />
    <Main />
    <Hero />
    </>
  )
}

export default Home