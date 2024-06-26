import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { NextPage } from 'next'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import {
  AmazonClone,
  BoopLogo,
  CryptoLottery,
  Diablo2StatChecker,
  LeftArrow,
  NFTMarketplace,
  ReactLogo,
  RightArrow
} from '../assets/index'

interface Project {
  picture: StaticImageData,
  title: string,
  description: string | JSX.Element,
  gitHubLink: string
  websiteLink?: string
}

const Projects: NextPage = () => {
  const scrollRef = useRef<HTMLInputElement | null>(null)

  const projects: Project[] = [
    {
      picture: BoopLogo,
      title: 'Boop',
      description:
        'Boop is the solution to international peer to peer remittances, built on-chain with just the right amount of abstraction. Click the link below to join the waitlist and get on board; thanks for supporting the movement!',
      gitHubLink: 'https://www.tryboop.com/'
    },
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
      picture: AmazonClone,
      title: 'Amazon Clone',
      description:
        'Off the topic of Crypto, this is a mock Amazon website resembling the user shopping experience. This was a pretty API heavy build; including Next.js with Next Auth (SSR), Google Cloud for OAuth2.0, Firebase with Google Sign-In as well as Firebase database for storing placed orders, Redux for checkout state management, and finally Slide for smooth checkout payments.',
      gitHubLink: 'https://github.com/KidLiberty/Amazon-Clone'
    },
    {
      picture: Diablo2StatChecker,
      title: 'Diablo II Stat Check',
      description:
        <span>
          A single-page application I built for my friends allows for quick and efficient searching of individual statistics and percentages on items in the PC game Diablo II; check it out: <a style={{ color: '#007acc' }} href='https://diablo-2-rolled-stack-checker.netlify.app/'>Diablo II Rolled Stat Checker</a>.
        </span>,
      gitHubLink: 'https://github.com/KidLiberty/diablo2-rolled-stat-checker',
      websiteLink: 'test'
    },
    {
      picture: ReactLogo,
      title: '',
      description: '<More to come... />',
      gitHubLink: 'https://github.com/KidLiberty/'
    }
  ]

  const handleScroll = (direction: string) => {
    const { current } = scrollRef

    if (direction === 'left' && window.innerWidth > 3000) {
      current!.scrollLeft -= 4000
    } else if (direction === 'right' && window.innerWidth > 3000) {
      current!.scrollLeft += 4000
    } else if (direction === 'left' && window.innerWidth > 1500) {
      current!.scrollLeft -= 2000
    } else if (direction === 'right' && window.innerWidth > 1500) {
      current!.scrollLeft += 2000
    } else if (direction === 'left' && window.innerWidth > 600) {
      current!.scrollLeft -= 1000
    } else if (direction === 'right' && window.innerWidth > 600) {
      current!.scrollLeft += 1000
    } else if (direction === 'left') {
      current!.scrollLeft -= 400
    } else if (direction === 'right') {
      current!.scrollLeft += 400
    }
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-5 xs:pl-4 z-10'>
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
        {projects.map((project: Project, i: number) => (
          <div
            key={i}
            className='w-screen flex flex-col items-center space-y-10 flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center'
          >
            <div
              className={`flex flex-col items-center mt-20 w-[95%] h-[95%] max-w-[800px] max-h-[800px] xs:w-[300px] xs:h-[300px] xs:mt-[100px] overflow-hidden ${project.picture === ReactLogo && 'xs:pb-[300px]'
                }`}
            >
              <img
                src={project.picture.src}
                className={`object-contain rounded-[5px] ${project.picture === ReactLogo && 'rotateIcon'
                  }`}
                alt='Project_Image'
              />
            </div>

            <div className='relative space-y-8 px-10 md:px-10 w-max-6xl xs:w-[360px] bottom-10'>
              <h4 className='text-2xl font-semibold text-center sm:mt-2'>
                {projects.indexOf(project) !== projects.length - 1
                  ? `Project ${i + 1} of ${projects.length}: ${project.title}`
                  : `Project ${i + 1} on the way!`}
              </h4>

              <div className='xs:h-[300px] pb-4 scrollbar-none max-w-[600px] text-center items-center'>
                <p
                  className={`text-md leading-6 md:text-left xs:text-[15px] ${project.description === '<More to come... />'
                    ? 'text-center'
                    : 'text-justify'
                    } xs:leading-5`}
                >
                  {project.description}
                </p>
                <a href={project?.gitHubLink} target='_blank' rel='noopener noreferrer' >
                  <p className='flex items-center justify-center pt-2 text-[#56bcc1] hover:text-[#56bcc1]/70 transition-all duration-200'>
                    {project.picture === BoopLogo && 'TryBoop.com'}
                    {project.picture !== BoopLogo && project.picture !== ReactLogo && 'Project Code'}
                    {project.picture === ReactLogo && 'GitHub'}
                    <ArrowTopRightOnSquareIcon width={20} height={20} className='ml-2' />
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#477ad2]/10 left-0 h-[400px] -skew-y-12 z-5' />
    </div>
  )
}

export default Projects
