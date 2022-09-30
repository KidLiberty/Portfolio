import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'

import {
  AWSLogo,
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
  SpringLogo
} from '../assets'
import ExperienceCard from './ExperienceCard'

interface experienceData {
  jobTitle: string
  company: string
  stack: Array<any>
  startTime: string
  endTime: string
  summaryPoints: Array<string>
}

type Props = {}

const Experience: NextPage = ({}: Props) => {
  const [hideButton, setHideButton] = useState<boolean>(false)
  const scrollRef = useRef<any>()
  const parentRef = useRef<any>()

  const experienceCardData: Array<Object> = [
    {
      jobTitle: 'Front-End Engineer',
      company: 'Right Click Save Ventures LLC',
      stack: [JavaScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo],
      startTime: 'July 2022',
      endTime: 'Present',
      summaryPoints: [
        'Currently founding Engineer for a Web3 Investment Company.',
        'Developing early stage institutional grade investment tooling for a Web3 digital asset fund.',
        'Carrying out implementations of UX design with React/Next.js.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Fidelity Investments',
      stack: [JavaLogo, SpringLogo, AWSLogo, JavaScriptLogo, NodeJSLogo],
      startTime: 'January 2020',
      endTime: 'Present',
      summaryPoints: [
        'DevOps Automation Engineer building various frameworks within Fidelity’s Next-Gen Mutual Funds and Alternative Investments.',
        'Currently overseeing automated-on-deploy testing process of AWS Lambda code.'
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

  const handleScroll = (direction: any) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
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
        {experienceCardData.map((experienceData: any, i: number) => {
          return (
            <ExperienceCard key={`experience-card-${i}`} {...experienceData} />
          )
        })}
      </div>
    </div>
  )
}

export default Experience
