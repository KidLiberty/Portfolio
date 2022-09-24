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

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold xs:text-2xl'>
          Here is a <i>little</i> background
        </h4>
        <p className='text-justify xs:text-sm'>
          I'm a developer from the the Northeast. I've been fascinated with the
          web and the language that builds it since 2014. My endeavors have
          brought me to the world of Web3; building enterprise React
          applications alongside blockchain networks like Ethereum to create
          some pretty cool decentralized applications. I'm particularly
          interested in bridging the gap between the web, crypto wallets and
          smart contracts to get my applications decentralized. My recent
          interests in Solidity have enabled me to begin building my own smart
          contracts that I've deployed to bring my visions to life. One day, I
          hope to have my hand in building something critical in the world of
          decentralization.
        </p>
      </div>
    </motion.div>
  )
}

export default About
