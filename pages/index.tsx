import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Header,
  Hero,
  Experience,
  Skills,
  Projects,
  ContactMe
} from '../components'
import About from '../components/About'
import NFTDisplay from '../components/NFTDisplay'

const Home: NextPage = () => {
  return (
    <div
      className='bg-[#141920] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-500 scrollbar-hide font-poppins'
    >
      <Head>
        <title>Brandon Stone.dev</title>
      </Head>

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='NFTDisplay' className='snap-center'>
        <NFTDisplay />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}

export default Home
