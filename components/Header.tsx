import React from 'react'
import { NextPage } from 'next'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Header: NextPage = ({}: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          url='https://github.com/KidLiberty'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://discord.com/Kid Liberty#3430'
          fgColor='transparent'
          bgColor='grey'
          className='scale-50'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/brandon-stone-8a319b163/'
          fgColor='grey'
          bgColor='transparent'
        />
      </div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex trext-sm text-gray-400'>
          <Link href='#contact'> Get in touch</Link>
        </p>
      </motion.div>
    </header>
  )
}

export default Header
