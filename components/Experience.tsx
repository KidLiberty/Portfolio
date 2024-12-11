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
  TypeScriptLogo
} from '../assets'

import ExperienceCard from './ExperienceCard'

type ExperienceData = {
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: (string | JSX.Element)[]
}

const Experience: NextPage = (): ReactElement => {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const parentRef = useRef<HTMLInputElement | null>(null)

  const experienceCardData: ExperienceData[] = [
    {
      jobTitle: 'Software Engineer',
      company: 'Boop Industries Inc',
      stack: [TypeScriptLogo, ReactNativeLogo, FirebaseLogo, SolanaLogo],
      startTime: 'October 2023',
      endTime: 'Present',
      summaryPoints: [
        'Founding engineer of Web3 payments startup focused on international remittances.',
        'Built core product using TypeScript/React Native and Firebase while implementing fiat on-ramp, KYC, and P2P transfers.',
        'Worked directly with vendors to integrate their solution into mobile product.',
      ]
    },
    {
      jobTitle: 'Front End Engineer',
      company: 'Lunar Labs LLC',
      stack: [TypeScriptLogo, ReactLogo, NextJSLogo, EthersJSLogo],
      startTime: 'May 2023',
      endTime: 'Oct 2023',
      summaryPoints: [
        <span>
          Contracted for the construction of <a style={{ color: '#007acc', }} href='https://moonwell.fi' target='_blank' rel='noopener noreferrer'>Moonwell.fi</a> front end.
        </span>,
        'Created component library with TypeScript/React/Next.js to handle Web3 specific user journeys and format on-chain data.',
        'Contributed to overall component architecture.',
      ]
    },
    {
      jobTitle: 'Front End Engineer',
      company: 'Right Click Save Ventures LLC',
      stack: [TypeScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo],
      startTime: 'July 2022',
      endTime: 'May 2023',
      summaryPoints: [
        'Founding UI Developer for Web3 Investment Company.',
        'Built early stage institutional grade investment tooling for Web3 digital asset fund.',
        'Responsible for rapid UX design with JavaScript, React and Next.js.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Fidelity Investments',
      stack: [AWSLogo, TypeScriptLogo, NodeJSLogo, JavaLogo],
      startTime: 'January 2020',
      endTime: 'May 2023',
      summaryPoints: [
        'DevOps Automation Engineer migrating legacy Java code using AWS and Node.js.',
        'Trained junior staff on team processes, tooling and best practices.'
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

      <div className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('left')}>
        <Image src={LeftArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
      </div>
      <div className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('right')}>
        <Image src={RightArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
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
