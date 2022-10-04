import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { HakiNFT } from '../assets'

type Props = {}

const About: NextPage = ({}: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-5'>
        About
      </h3>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        src={HakiNFT.src}
        className='mt-32 -mb-20 md:mb-0 flex-shrink-0 w- h-56 md:w-64 md:h-64 xs:w-40 xs:h-40 rounded-full object-cover md:rounded-lg xl:w-[500px] xl:h-[600px] overflow-hidden'
        alt='About_Pic'
      />

      <div className='relative flex flex-col items-center space-y-10 xs:space-y-8 px-0 md:px-10 mb-6 xs:mb-6'>
        <div className='text-[32px] font-semibold xs:text-xl sm:text-[28px]'>
          <span className='relative inset-0 top-[28px] text-[#daa1f4]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-[30px] left-0.5 text-[#343236]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-[32px] left-1.5 text-[#74e1a9]'>
            Here is a <i>little</i> background
          </span>
        </div>
        <p className='w-[90%] text-justify text-gray-300 text-[18px] xs:text-[13px] xs:w-[100%] xs:pb-12 sm:text-[14px] leading-5 xs:leading-4'>
          Welcome to my page! I'm a developer from the Northeast 🍂🌊 who has
          worked in financial technology for the past 3 years. I have also had a
          fascination with what I've seen on the web and the language that
          builds it since 2014. This determination has led me to the world of{' '}
          <b>Web3</b>; rapidly building UIs with React/Next.js in harmony with
          the Ethereum blockchain to create some pretty cool decentralized
          applications. My current ambitions hone on bridging the gap between
          the web, EOAs like MetaMask 🦊, and on-chain protocols to get my
          creations to a wider array of those who love Cryptocurrency. It's been
          a blast learning Solidity to create Smart Contracts, and with
          Front-End frameworks like ethers.js the process could not be more
          harmonious. 👏🏻 One day, my dream is to have a hand in building a
          something narrative-shifting in the world of decentralized finance.
        </p>
      </div>
    </div>
  )
}

export default About
