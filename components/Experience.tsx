import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import {
  JavaLogo,
  JavaScriptLogo,
  NextJSLogo,
  NodeJSLogo,
  OpenSeaLogo,
  PythonLogo,
  ReactLogo,
  ReactNativeLogo,
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
  const experienceCardData: Array<Object> = [
    {
      jobTitle: 'Front-End Engineer',
      company: 'Right Click Save Ventures LLC',
      stack: [JavaScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo],
      startTime: 'July 2022',
      endTime: 'Present',
      summaryPoints: [
        'Founding UX Engineer of a ',
        'Building early stage institutional grade investment tooling for a Web3 digital asset fund'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Fidelity Investments',
      stack: [JavaLogo, SpringLogo, JavaScriptLogo, NodeJSLogo],
      startTime: 'January 2020',
      endTime: 'Present',
      summaryPoints: ['']
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Sensible United LLC',
      stack: [JavaScriptLogo, ReactLogo, ReactNativeLogo],
      startTime: 'August 2018',
      endTime: 'December 2019',
      summaryPoints: ['']
    }
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='h-screen flex relative overflow-hidden flex-col justify-evenly text-left md:flex-row max-w-full px-10 mx-auto items-center pt-32'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {experienceCardData.map((experienceData: any, i: number) => {
          return (
            <ExperienceCard key={`experience-card-${i}`} {...experienceData} />
          )
        })}
      </div>
    </motion.div>
  )
}

export default Experience
