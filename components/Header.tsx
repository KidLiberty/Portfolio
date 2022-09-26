import React from 'react'
import { NextPage } from 'next'
import { SocialIcon } from 'react-social-icons'
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
          className='hover:opacity-40 transition-all duration-200'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/brandon-stone-8a319b163/'
          fgColor='grey'
          bgColor='transparent'
          className='hover:opacity-40 transition-all duration-200'
        />
      </div>

      <Link href='#contact'>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer hover:opacity-40 transition-all duration-200'>
          <SocialIcon network='email' fgColor='grey' bgColor='transparent' />
          <p className='uppercase xs:hidden md:inline-flex trext-sm text-gray-400'>
            Get in touch
          </p>
        </div>
      </Link>
    </header>
  )
}

export default Header
