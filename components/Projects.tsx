import React, { useState } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import { ReactLogo } from '../assets/index'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const projects: Array<Object> = [
    {
      picture: '',
      title: 'NFT Marketplace',
      description:
        "Web3 is quickly growing in the development space, and one of the microcosms to the craze of Cryptocurrencies is the NFT trading platform OpenSea. I've always been intrigued by the nature of blockchain transactions, and set out to learn the heuristics of successfully implementing these trades for myself. Using ethers.js in harmony with Hard Hat & MetaMask, I was able to learn the methodology to implementing on-chain user interactions through JavaScript and Solidity Smart Contracts. Buzzwords aside, I'm fascinated by this tech and I look forward to using this technology in the future when working on the Ethereum Blockchain and decentralized Web Applications."
    },
    { picture: '', title: '', description: '<More to come>' },
    { picture: '', title: '', description: '<More to come>' }
  ]

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 '>
        {projects.map((project: any, i: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-full mt-14 xs:mt-5'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={ReactLogo.src}
              className='w-72 h-72 object-contain'
              alt='Project_Image'
            />

            <div className='space-y-10 px-0 md:px-10 w-max-6xl xs:w-[360px]'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline'>
                  Current work {i + 1} of project {projects.length}:
                </span>{' '}
                {project.title}
              </h4>

              <div className='xs:h-[300px] overflow-scroll'>
                <p className='text-md xs:text-[1.25rem] leading-6 md:text-left text-center'>
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#477ad2]/10 left-0 h-[400px] -skew-y-12' />
    </div>
  )
}

export default Projects
