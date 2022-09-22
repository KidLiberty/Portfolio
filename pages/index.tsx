import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Header, Hero } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brandon&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
