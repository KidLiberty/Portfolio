import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { StaticImageData } from 'next/image'

import {
  JavaLogo,
  NodeJSLogo,
  PythonLogo,
  ReactNativeLogo,
  SpringLogo
} from '../assets'

type ExperienceData = {
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: (string | JSX.Element)[]
}

const ExperienceCard: NextPage<ExperienceData> = ({
  jobTitle,
  company,
  stack,
  startTime,
  endTime,
  summaryPoints
}): ReactElement => {
  return (
    <article className='w-[400px] md:w-[600px] xl:w-[900px] xs:h-[90%] sm:w-[400px] flex rounded-[10px] flex-col items-center text-[#3f4040] xs:w-[300px] space-y-7 flex-shrink-0 snap-center bg-[#c8c8c8] duration-200 overflow-hidden shadow-sm shadow-[#5292a0]'>
      <div className='px-0 md:px-10 pt-5 '>
        <div className='mb-7 xs:mb-20'>
          <h4
            className={`
            text-4xl xs:text-[1.75rem] xs:text-md xs:text-center font-light pb-1 bg-clip-text text-transparent 
            ${company === 'Boop Industries Inc' && 'bg-gradient-to-r from-yellow-600 to-orange-500'} 
            ${company === 'Lunar Labs LLC' && 'bg-gradient-to-r from-orange-600 to-red-500'} 
            ${company === 'Right Click Save Ventures LLC' && 'bg-gradient-to-r from-red-600 to-blue-800'} 
            ${company === 'Fidelity Investments' && 'bg-gradient-to-r from-blue-800 to-green-600'}
            ${company === 'Sensible United LLC' && 'bg-gradient-to-r from-green-600 to-yellow-600'}
            `}
          >
            {jobTitle}
          </h4>
          <p className='text-2xl xs:text-[1rem] xs:text-center font-semibold'>{company}</p>
          <div className='flex space-x-2 my-2 xs:ml-6'>
            {stack.map(
              (logo: React.ImgHTMLAttributes<HTMLImageElement>, i: number) => {
                return (
                  <div
                    key={`logo-${i}`}
                    className={`${logo !== PythonLogo &&
                      logo !== NodeJSLogo &&
                      logo !== SpringLogo &&
                      logo !== ReactNativeLogo &&
                      'rounded-full bg-black'} 
                    ${logo === JavaLogo && 'bg-white'} 
                    ${logo === ReactNativeLogo && 'bg-[#333333] rounded-md'} 
                    `}
                  >
                    <img src={logo.src} className='w-12 h-12 object-cover rounded-md' />
                  </div>
                )
              }
            )}
          </div>
          <p className='uppercase pb-5 pt-2 xs:py-3 xs:ml-6 font-bold'>{startTime} <i>-</i> {endTime}</p>
          <ul className='w-[300px] list-disc space-y-2 xs:space-y-2 ml-5 text-lg xs:px-4 xs:text-[13px]'>
            {summaryPoints.map((summaryPoint: string | JSX.Element, i: number) =>
              <li key={`summaryPoint-${i}`} className='xs:text-[13px] leading-5 xs:leading-4'>
                {summaryPoint}
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
