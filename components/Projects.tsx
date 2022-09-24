import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import { NFTMarketplace, ReactLogo } from '../assets/index'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const projects: Array<Object> = [
    {
      picture: NFTMarketplace,
      title: 'NFT Marketplace',
      description:
        'A full-fledged Web3 NFT Marketplace application that allows the interactivity of MetaMask through the implementation of ethers.js. I used the Hard Hat Ethereum development environment in harmony with Solidity smart contracts to allow the creation, storage, and trading of NFTs between public addresses on the Ethereum blockchain.'
    },
    { picture: ReactLogo, title: '', description: '<More to come>' },
    { picture: ReactLogo, title: '', description: '<More to come>' }
  ]

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20'>
        {projects.map((project: any, i: number) => (
          <div className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-full mt-14 xs:mt-5'>
            <div className='mt-20 w-[95%] h-[95%] max-w-[1100px] max-[1100px] xs:w-[300px] xs:h-[300px] xs:mt-40'>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={project.picture.src}
                className='object-contain '
                alt='Project_Image'
              />
            </div>

            <div className='space-y-10 px-0 md:px-10 w-max-6xl xs:w-[360px]'>
              <h4 className='text-2xl font-semibold text-center'>
                Current work {i + 1} of project {projects.length}:{' '}
                {project.title}
              </h4>

              <div className='xs:h-[300px] overflow-scroll'>
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
