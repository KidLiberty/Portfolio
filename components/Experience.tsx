import React, { ReactElement, useRef } from 'react'
import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'

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
  SpringLogo,
  TypeScriptLogo
} from '../assets'

import ExperienceCard from './ExperienceCard'

type ExperienceData = {
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: string[]
}

const Experience: NextPage = (): ReactElement => {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const parentRef = useRef<HTMLInputElement | null>(null)

  const experienceCardData: ExperienceData[] = [
    {
      jobTitle: 'Front-End Engineer',
      company: 'Boop Industries Inc',
      stack: [TypeScriptLogo, ReactNativeLogo, FirebaseLogo, SolanaLogo],
      startTime: 'October 2023',
      endTime: 'Present',
      summaryPoints: [
        'Founding engineer of Web3 payments startup focused on international remittances.',
        'Built core product using React Native and Firebsase while implementing fiat on-ramp, KYC, and P2P transfers.',
        'Worked directly with vendors to integrate their solution into mobile product.',
      ]
    },
    {
      jobTitle: 'Front-End Engineer',
      company: 'Lunar Labs LLC',
      stack: [TypeScriptLogo, ReactLogo, NextJSLogo, EthersJSLogo],
      startTime: 'May 2023',
      endTime: 'Oct 2023',
      summaryPoints: [
        'Contracted professionally for the building of the Moonwell.fi dApp UI.',
        'Engineered multiple data structures utilizing aggregated calls from both decentralized on-chain and centralized off-chain infrastructure.',
        'Contributed heavily to overall component architecture.',
      ]
    },
    {
      jobTitle: 'Front-End Engineer',
      company: 'Right Click Save Ventures LLC',
      stack: [JavaScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo],
      startTime: 'July 2022',
      endTime: 'Present',
      summaryPoints: [
        'Currently founding UI Developer for a Web3 Investment Company.',
        'Building early stage institutional grade investment tooling for a Web3 digital asset fund.',
        'Responsible for rapid & dynamic UX design with JavaScript, React and Next.js.',
        'Working with Next.js Server-Side Rendering to optimize API call performance from Python Backend.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Fidelity Investments',
      stack: [JavaScriptLogo, NodeJSLogo, JavaLogo, SpringLogo, AWSLogo],
      startTime: 'January 2020',
      endTime: 'Present',
      summaryPoints: [
        'DevOps Automation Engineer building various frameworks within Fidelity’s Next-Gen Mutual Funds and Alternative Investments.',
        'Overseeing automated-on-deploy testing process of AWS Lambda code.',
        'Developing with Node and the Jest Framework to ensure test coverage of APIs.'
      ]
    },
    {
      jobTitle: 'Front-End Intern',
      company: 'Sensible United LLC',
      stack: [JavaScriptLogo, ReactLogo, ReactNativeLogo],
      startTime: 'August 2018',
      endTime: 'December 2019',
      summaryPoints: [
        'Apprenticed as React Native intern under founding member of small fintech startup.',
        'Worked on UX design team, contributing several screen mocks to production with basic implementation in React Native.'
      ]
    }
  ]

  const handleScroll = (direction: string) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current!.scrollLeft -= 300
    } else {
      current!.scrollLeft += 300
    }
  }

  return (
    <div
      className='h-screen flex relative overflow-hidden flex-col justify-evenly text-left md:flex-row max-w-full px-10 mx-auto items-center pt-32'
      ref={parentRef}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-6'>
        Experience
      </h3>

      <div
        className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40'
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
        className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40'
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
        className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-none overflow-hidden'
        ref={scrollRef}
      >
        {experienceCardData.map((experienceData: ExperienceData, i: number) =>
          <ExperienceCard key={`experience-card-${i}`} {...experienceData} />
        )}
      </div>
    </div>
  )
}

export default Experience
