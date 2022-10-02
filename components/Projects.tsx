import React, { useRef } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import {
  CryptoLottery,
  Diablo2StatChecker,
  LeftArrow,
  NFTMarketplace,
  ReactLogo,
  RightArrow
} from '../assets/index'
import Link from 'next/link'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const scrollRef = useRef<any>(null)

  const projects: Array<Object> = [
    {
      picture: NFTMarketplace,
      title: 'NFT Marketplace',
      description:
        'A decentralized Web3 NFT Marketplace that allows the interactivity of MetaMask through the implementation of ethers.js. It uses the Hard Hat Ethereum development environment in harmony with Solidity smart contracts to allow the creation, storage, and trading of NFTs between public addresses on the Ethereum blockchain.',
      gitHubLink: 'https://github.com/KidLiberty/NFT-Marketplace-dApp'
    },
    {
      picture: CryptoLottery,
      title: 'Crypto Lottery',
      description:
        "I found this idea from one of my favorite React content creators. It's a decentralized lottery application that allows MetaMask wallet users to connect and buy draws. At the end of the draw timer, a randomly selected address will win the pot. I used the ThirdWeb JavaScript SDK to streamline the process of interacting with Solidity Smart Contract code on the Polygon Network.",
      gitHubLink: 'https://github.com/KidLiberty/Crypto-Lottery-dApp'
    },
    {
      picture: Diablo2StatChecker,
      title: 'Diablo 2 Stat Check',
      description:
        'Off the topic of Crypto, this single-page application I built for my friends allows for quick and efficient searching of individual statistics and percentages on items in the PC game Diablo II.',
      gitHubLink: 'https://github.com/KidLiberty/diablo2-rolled-stat-checker'
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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-5 xs:pl-4'>
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
              <h4 className='text-2xl font-semibold text-center sm:mt-2'>
                Project {i + 1} of {projects.length}: {project.title}
              </h4>

              <div className='xs:h-[300px] pb-4 scrollbar-none max-w-[600px] text-center items-center'>
                <p className='text-md leading-6 md:text-left xs:text-[15px] text-justify'>
                  {project.description}
                </p>
                <a
                  target='_blank'
                  href={project.gitHubLink}
                  rel='noopener noreferrer'
                >
                  <p className='flex items-center justify-center pt-2 text-[#56bcc1] hover:text-[#56bcc1]/70 transition-all duration-200'>
                    GitHub Code
                    <ArrowTopRightOnSquareIcon
                      width={20}
                      height={20}
                      className='ml-2'
                    />
                  </p>
                </a>
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
