import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '.'
import { HakiNFT } from '../assets'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi there, I'm Brandon!",
      '<Web Developer /> & JavaScript nerd :^)',
      'Front End Focused; Full-Stack Experienced',
      'Web3 Contributor'
    ],
    loop: true,
    delaySpeed: 1000,
    deleteSpeed: 40,
    typeSpeed: 60
  })

  return (
    <div className='h-screen relative flex flex-col justify-center items-center space-y-8 text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative top-20'>
        <Image src={HakiNFT} className='rounded-full mx-auto' width={175} height={175} objectFit='cover' alt='Portfolio Picture' />
      </div>
      <div className='relative flex flex-col items-center justify-center text-center top-16'>
        <h1 className='pl-4 text-sm sm:text-lg text-transparent text-center uppercase tracking-[10px] sm:tracking-[12px] bg-clip-text bg-gradient-to-br from-gray-300 to-gray-800'>
          Software Engineer
        </h1>
        <h1 className='text-4xl font-semibold scroll-px-10'>
          <span className='text-2xl sm:text-4xl ml-6'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='sm:flex pt-2'>
          <div className='flex justify-center items-center'>
            <Link href='#about'>
              <button className='heroButton text-[14px] sm:text-[16px] hover:border-[#e867e8]/40'>About</button>
            </Link>
            <Link href='#experience'>
              <button className='heroButton text-[14px] sm:text-[16px] hover:border-[#00cde4]/40'>Experience</button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton text-[14px] sm:text-[16px] hover:border-[#39ffa9]/40'>Skills</button>
            </Link>
          </div>

          <div className='flex justify-center items-center'>
            <Link href='#projects'>
              <button className='heroButton text-[14px] sm:text-[16px] hover:border-[#ffec00]/40'>Projects</button>
            </Link>
            <Link href='#contact'>
              <button className='heroButton text-[14px] sm:text-[16px] hover:border-[#ff6947]/40'>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}