import React from 'react'
import Head from 'next/head'

import { Header, Hero, About, Experience, Skills, Projects, ContactMe, } from '../components'

export default function Home() {
  return (
    <div className='bg-[#141920] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-500 scrollbar-hide font-poppins'>
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

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}