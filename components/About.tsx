import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { HakiNFT } from '../assets'

type Props = {}

const About: NextPage = ({}: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        src={HakiNFT.src}
        className='mt-32 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 xs:w-40 xs:h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] overflow-hidden'
        alt='About_Pic'
      />

      <div className='relative flex flex-col items-center space-y-10 px-0 md:px-10'>
        <div className='text-[28px] font-semibold xs:text-xl sm:text-xl'>
          <span className='inset-0 top-0.75 text-[#daa1f4]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-0.5 left-0.5 text-[#343236]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-1 left-1.5 text-[#74e1a9]'>
            Here is a <i>little</i> background
          </span>
        </div>
        <p className='text-justify text-[18px] w-[75%] xs:text-[13px] xs:w-[100%] xs:pb-12 sm:text-[14px] leading-5'>
          My name is Brandon, I'm a developer from the Northeast 🍂🌊 who has
          worked in the world of financial technology for the past 3 years. I've
          been fascinated with what I've seen on the web and the language that
          builds it since 2014. This determination has led me to the world of{' '}
          <b>Web3</b>; building UIs with React/Next.js in harmony with the
          Ethereum blockchain to create some pretty cool decentralized
          applications. My current ambitions hone on bridging the gap between
          the web, EOAs (through MetaMask 🦊), and on-chain protocols to get my
          creations to a wider array of people in the space. It's been a blast
          using Solidity to create Smart Contracts, and with frameworks like
          ethers.js the process could not be more harmonious. One day, the dream
          is having a hand in building something narrative-shifting in the world
          of decentralized finance.
        </p>
      </div>
    </div>
  )
}

export default About
