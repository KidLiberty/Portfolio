import { useRef } from 'react'
import Image from 'next/image'

import {
  AWSLogo,
  EthersJSLogo,
  FirebaseLogo,
  JavaLogo,
  JavaScriptLogo,
  LeftArrow,
  NextJSLogo,
  NodeJSLogo,
  OpenSeaLogo,
  PythonLogo,
  ReactLogo,
  ReactNativeLogo,
  RightArrow,
  SolanaLogo,
  TypeScriptLogo
} from '../assets'

import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const parentRef = useRef<HTMLInputElement | null>(null)

  const handleScroll = (direction: string) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current!.scrollLeft -= 300
    } else {
      current!.scrollLeft += 300
    }
  }

  return (
    <div className='h-screen flex relative overflow-hidden flex-col justify-evenly text-left md:flex-row max-w-full px-10 mx-auto items-center pt-32' ref={parentRef}>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-6'>
        Experience
      </h3>

      <div className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('left')}>
        <Image src={LeftArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
      </div>
      <div className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('right')}>
        <Image src={RightArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
      </div>

      {/* Experience Cards */}
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-none overflow-hidden' ref={scrollRef}>
        <ExperienceCard
          headerStyle='text-[30px] bg-gradient-to-r from-yellow-600 to-orange-500'
          jobTitle='Web3 Mobile Engineer'
          company='Boop Industries Inc.'
          stack={[TypeScriptLogo, ReactNativeLogo, FirebaseLogo, SolanaLogo]}
          startTime='October 2023'
          endTime='Present'
          summaryPoints={[
            'Built core peer-to-peer payments product with TypeScript, React Native, Node, Plaid and Google Firebase SDK while implementing crypto-to-fiat onramp, user authentication, and P2P transfers on iOS.',
            'Integrated TypeScript REST APIs into product by communicating directly with vendors.',
            'Organized React Context architecture in conjunction with Solana/web3.js.'
          ]}
        />
        <ExperienceCard
          headerStyle='bg-gradient-to-r from-orange-600 to-red-500'
          jobTitle='Software Engineer'
          company='Lunar Labs LLC'
          stack={[TypeScriptLogo, ReactLogo, NextJSLogo, EthersJSLogo]}
          startTime='May 2023'
          endTime='Oct 2023'
          summaryPoints={[
            <span>
              Constructed component library with TypeScript and Next.js to handle Web3-specific user journeys for the <a style={{ color: '#007acc', }} href='https://moonwell.fi' target='_blank' rel='noopener noreferrer'>Moonwell.fi</a> dApp.
            </span>,
            'Built REST APIs to query on-chain specific JSON-RPC data and format data to UI.',
            'Utilized TypeScript wallet SDKs for Ethereum (ethers.js), Base & Solana (@solana/web3.js).',
          ]}
        />
        <ExperienceCard
          headerStyle='bg-gradient-to-r from-red-600 to-blue-800'
          jobTitle='Front End Engineer'
          company='Right Click Save Ventures LLC'
          stack={[TypeScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo]}
          startTime='July 2022'
          endTime='May 2023'
          summaryPoints={[
            'Founding UI Developer for Web3 Investment Company.',
            'Built early stage institutional grade investment tooling for Web3 digital asset fund.',
            'Responsible for rapid UX design with JavaScript, React and Next.js.'
          ]}
        />
        <ExperienceCard
          headerStyle='bg-gradient-to-r from-blue-800 to-green-600'
          jobTitle='Software Engineer'
          company='Fidelity Investments'
          stack={[AWSLogo, TypeScriptLogo, NodeJSLogo, JavaLogo]}
          startTime='January 2020'
          endTime='May 2023'
          summaryPoints={[
            'Integrated full-stack AWS services including EC2, DynamoDB, S3, API Gateway, and Lambda with respective TypeScript SDKs.',
            'Refactored and maintained legacy Java code while performing migrations from Java to TypeScript modules within core DevOps pipeline.',
            'Experience with Docker, Kubernetes, Jenkins and versioning control within pipeline.'
          ]}
        />
        <ExperienceCard
          headerStyle='bg-gradient-to-r from-green-600 to-yellow-600'
          jobTitle='Front-End Intern'
          company='Sensible United LLC'
          stack={[JavaScriptLogo, ReactLogo, ReactNativeLogo, NodeJSLogo]}
          startTime='August 2018'
          endTime='December 2019'
          summaryPoints={[
            'Apprenticed as React Native intern under founding member of small fintech startup.',
            'Worked on core full-stack pipeline with an emphasis on Front-End architecture.',
            'Exposure to REST APIs with express and MongoDB.'
          ]}
        />
      </div>
    </div>
  )
}