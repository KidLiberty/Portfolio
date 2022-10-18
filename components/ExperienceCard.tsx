import React from 'react'
import { NextPage } from 'next'
import { PythonLogo, ReactNativeLogo, SpringLogo } from '../assets'

interface ExperienceData {
  experienceData: {
    jobTitle: string
    company: string
    stack: Array<any>
    startTime: string
    endTime: string
    summaryPoints: Array<string>
  }
}

const ExperienceCard: NextPage<ExperienceData['experienceData']> = ({
  jobTitle,
  company,
  stack,
  startTime,
  endTime,
  summaryPoints
}) => {
  return (
    <article className='w-[400px] md:w-[600px] xl:w-[900px] xs:h-[90%] sm:w-[400px] flex rounded-[10px] flex-col items-center text-[#3f4040] xs:w-[300px] space-y-7 flex-shrink-0 snap-center bg-[#c8c8c8] duration-200 overflow-hidden shadow-sm shadow-[#5292a0]'>
      <div className='px-0 md:px-10 pt-5 '>
        <div className='mb-7 xs:mb-20'>
          <h4
            className={`text-4xl xs:text-[1.75rem] xs:text-md xs:text-center font-light pb-1 bg-clip-text text-transparent 
            ${
              jobTitle === 'Front-End Engineer' &&
              'bg-gradient-to-r from-red-600 to-blue-800'
            } 
            ${
              jobTitle === 'Software Engineer' &&
              'bg-gradient-to-r from-blue-800 to-green-600'
            }
            ${
              jobTitle === 'Front-End Intern' &&
              'bg-gradient-to-r from-green-600 to-yellow-600'
            }`}
          >
            {jobTitle}
          </h4>

          <p className='text-2xl xs:text-[1rem] xs:text-center font-semibold'>
            {company}
          </p>

          <div className='flex space-x-2 my-2 xs:ml-6'>
            {stack.map(
              (logo: React.ImgHTMLAttributes<HTMLImageElement>, i: number) => {
                return (
                  <div
                    key={`logo-${i}`}
                    className={
                      logo !== PythonLogo &&
                      logo !== ReactNativeLogo &&
                      logo !== SpringLogo
                        ? `rounded-full bg-black`
                        : `rounded-full`
                    }
                  >
                    <img src={logo.src} className='w-12 h-12 object-cover' />
                  </div>
                )
              }
            )}
          </div>

          <p className='uppercase pb-5 pt-2 xs:py-3 xs:ml-6 font-bold'>
            {startTime} <i>-</i> {endTime}
          </p>

          <ul className='w-[300px] list-disc space-y-2 xs:space-y-2 ml-5 text-lg xs:px-4 xs:text-[13px]'>
            {summaryPoints.map((summaryPoint: string, i: number) => {
              return (
                <li
                  key={`summaryPoint-${i}`}
                  className='xs:text-[13px] leading-5 xs:leading-4'
                >
                  {summaryPoint}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
