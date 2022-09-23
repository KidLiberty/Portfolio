import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '../components'
import { HakiNFT } from '../assets'
import Link from 'next/link'

type Props = {}

const Hero: NextPage = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi there, I'm Brandon!",
      'JavaScript nerd :^)',
      '<Web3 Developer />',
      '...turned aspiring Blockchain Engineer.'
    ],
    loop: true,
    delaySpeed: 1500
  })
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative top-20'>
        <Image
          src={HakiNFT}
          className='rounded-full mx-auto'
          width={175}
          height={175}
          objectFit='cover'
          alt='Portfolio Picture'
        />
      </div>
      <div className='relative top-16 z-20'>
        <h1 className='font-poppins text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Front End Engineer
        </h1>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='text-4xl mr-3'>{text}</span>
          <span className='relative right-3'>
            <Cursor cursorColor='#f7ab0a' />
          </span>
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
