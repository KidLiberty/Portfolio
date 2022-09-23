import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header, Hero, Experience, Skills, Projects } from '../components'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Brandon&apos;s Portfolio</title>
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
      {/* Contact Me */}
    </div>
  )
}

export default Home
