import React, { useRef } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

import {
  Diablo2StatChecker,
  LeftArrow,
  NFTMarketplace,
  ReactLogo,
  RightArrow
} from '../assets/index'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const scrollRef = useRef<any>(null)

  const projects: Array<Object> = [
    {
      picture: NFTMarketplace,
      title: 'NFT Marketplace',
      description:
        'A full-fledged Web3 NFT Marketplace application that allows the interactivity of MetaMask through the implementation of ethers.js. It uses the Hard Hat Ethereum development environment in harmony with Solidity smart contracts to allow the creation, storage, and trading of NFTs between public addresses on the Ethereum blockchain.'
    },
    {
      picture: Diablo2StatChecker,
      title: 'Diablo 2 Stat Check',
      description:
        'This single-page application built with Typescript that allows for quick and efficient searching of individual statistics and their percentages on items in the PC game Diablo II.'
    },
    { picture: ReactLogo, title: '', description: '<More to come... />' }
  ]

  const handleScroll = (direction: string | boolean) => {
    const { current } = scrollRef

    if (direction === 'left' && window.innerWidth > 600) {
      current.scrollLeft -= 1000
    } else if (direction === 'right' && window.innerWidth > 600) {
      current.scrollLeft += 1000
    } else if (direction === 'left') {
      current.scrollLeft -= 400
    } else if (direction === 'right') {
      current.scrollLeft += 400
    }
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div
        className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40 z-30'
        onClick={() => handleScroll('left')}
      >
        <Image
          src={LeftArrow}
          width={35}
          height={35}
          objectFit='cover'
          alt='LeftArrow'
        />
      </div>
      <div
        className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40 z-30'
        onClick={() => handleScroll('right')}
      >
        <Image
          src={RightArrow}
          width={35}
          height={35}
          objectFit='cover'
          alt='LeftArrow'
        />
      </div>

      <div
        ref={scrollRef}
        className='w-full flex overflow-x-scroll snap-x snap-mandatory z-20 mt-20 scrollbar-none'
      >
        {projects.map((project: any, i: number) => (
          <div
            key={i}
            className='w-screen flex flex-col items-center space-y-10 flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center'
          >
            <div className='flex flex-col items-center mt-20 w-[95%] h-[95%] max-w-[800px] max-h-[800px] xs:w-[300px] xs:h-[300px] xs:mt-[100px] overflow-hidden'>
              <img
                src={project.picture.src}
                className={`object-contain rounded-[5px] ${
                  project.picture === ReactLogo && 'rotateIcon'
                }`}
                alt='Project_Image'
              />
            </div>

            <div className='relative space-y-8 px-10 md:px-10 w-max-6xl xs:w-[360px] bottom-10'>
              <h4 className='text-2xl font-semibold text-center'>
                Current project {i + 1} of {projects.length}: {project.title}
              </h4>

              <div className='xs:h-[300px] pb-4 scrollbar-none max-w-[600px] text-center items-center'>
                <p className='text-md leading-6 md:text-left text-center xs:text-[15px]'>
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
