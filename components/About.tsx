import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { HakiNFT } from '../assets'

type Props = {}

const About: NextPage = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        className=' mt-32 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        initial={{ x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={HakiNFT.src}
        alt='About_Pic'
      />

      <div className='relative flex flex-col items-center space-y-10 px-0 md:px-10'>
        <h4 className='text-[28px] font-semibold xs:text-2xl'>
          <span className='inset-0 top-0.75 text-[#daa1f4]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-0.5 left-0.5 text-[#343236]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-1 left-1.5 text-[#74e1a9]'>
            Here is a <i>little</i> background
          </span>
        </h4>
        <p className='text-justify w-[75%] xs:text-sm'>
          I'm a developer from the the Northeast. I've been fascinated with what
          I've seen on the web and the language that builds it since 2014. This
          curiosity has led me to the world of Web3; building UI's with
          React/Next.js in harmony with the Ethereum blockchain to create some
          pretty cool decentralized applications. I'm particularly interested in
          bridging the gap between the web, wallets like MetaMask, and smart
          contracts to get my creations to a wider array of people. My recent
          explorations in Solidity have enabled me to begin building my own
          smart contracts that I've deployed to bring my visions to life. One
          day, I hope to have my hand in building something critical in the
          world of decentralization.
        </p>
      </div>
    </motion.div>
  )
}

export default About
