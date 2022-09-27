import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import { Diablo2StatChecker, NFTMarketplace, ReactLogo } from '../assets/index'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const projects: Array<Object> = [
    {
      picture: NFTMarketplace,
      title: 'NFT Marketplace',
      description:
        'A full-fledged Web3 NFT Marketplace application that allows the interactivity of MetaMask through the implementation of ethers.js. I used the Hard Hat Ethereum development environment in harmony with Solidity smart contracts to allow the creation, storage, and trading of NFTs between public addresses on the Ethereum blockchain.'
    },
    {
      picture: Diablo2StatChecker,
      title: 'Diablo 2 Stat Check',
      description:
        'This simple single-page application built with Typescript allows a quick and efficient search of the items in the PC game Diablo II. It features a full JSON database of in-game items.'
    },
    { picture: ReactLogo, title: '', description: '<More to come>' }
  ]

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='w-full flex overflow-x-scroll snap-x snap-mandatory z-20 mt-20 scrollbar-none'>
        {projects.map((project: any, i: number) => (
          <div
            key={i}
            className='w-screen flex flex-col items-center space-y-10 flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center'
          >
            <div className='flex flex-col items-center mt-20 w-[97%] h-[97%] max-w-[800px] max-h-[800px] xs:w-[300px] xs:h-[300px] xs:mt-40'>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={project.picture.src}
                className='object-contain rounded-[5px]'
                alt='Project_Image'
              />
            </div>

            <div className='space-y-8 px-10 md:px-10 w-max-6xl xs:w-[360px]'>
              <h4 className='text-2xl font-semibold text-center'>
                Current project {i + 1} of {projects.length}: {project.title}
              </h4>

              <div className='xs:h-[300px] overflow-scroll pb-4 scrollbar-none'>
                <p className='text-md xs:text-[1.25rem] leading-6 md:text-left text-center'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#477ad2]/10 left-0 h-[400px] -skew-y-12' />
    </div>
  )
}

export default Projects
