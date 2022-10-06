import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '../components'
import { HakiNFT } from '../assets'
import Link from 'next/link'

const Hero: NextPage = () => {
  const [text] = useTypewriter({
    words: [
      "Hi there, I'm Brandon!",
      'JavaScript nerd :^)',
      '<Web3 Developer />',
      '...turned aspiring Blockchain Engineer.'
    ],
    loop: true,
    delaySpeed: 1250,
    deleteSpeed: 40,
    typeSpeed: 60
  })
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative top-20 overflow-hidden'>
        <Image
          src={HakiNFT}
          className='rounded-full mx-auto'
          width={175}
          height={175}
          objectFit='cover'
          alt='Portfolio Picture'
        />
      </div>
      <div className='relative flex flex-col items-center justify-center text-center top-16 xs:top-14 z-20'>
        <h1 className='text-sm uppercase text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-800 tracking-[15px] text-center xs:tracking-[12px] pl-4'>
          Front End Engineer
        </h1>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 xs:h-[75px] ml-2'>
          <span className='text-4xl mr-3 xs:text-3xl'>{text}</span>
          <span className='relative right-4'>
            <Cursor cursorColor='#f7ab0a' />
          </span>
        </h1>

        <div className='flex xs:flex-col pt-5 sm:pt-4 xs:pb-10'>
          <div className='flex'>
            <Link href='#about'>
              <button className='heroButton text-[14px] xs:text-xl'>
                About
              </button>
            </Link>
            <Link href='#experience'>
              <button className='heroButton text-[14px] xs:text-xl'>
                Experience
              </button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton text-[14px] xs:text-xl'>
                Skills
              </button>
            </Link>
          </div>

          <div className='flex justify-center items-center'>
            <Link href='#projects'>
              <button className='heroButton text-[14px] xs:text-xl'>
                Projects
              </button>
            </Link>
            <Link href='#NFTDisplay'>
              <button className='heroButton text-[14px] xs:text-xl'>
                Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
