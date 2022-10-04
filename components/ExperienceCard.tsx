import React from 'react'
import { NextPage } from 'next'

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
    <article className='flex rounded-[10px] flex-col items-center text-[#b8bcc8] xs:w-[300px] space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#2d3945] hover:opacity-100 transition-opacity duration-200 overflow-hidden shadow-sm shadow-[#5292a0] xs:h-[90%] sm:w-[110%]'>
      <div className='px-0 md:px-10 pt-10 '>
        <div className='mb-20'>
          <h4 className='text-4xl xs:text-[1.75rem] font-light xs:text-md xs:text-center'>
            {jobTitle}
          </h4>

          <p className='text-2xl font-bold mt-1 xs:text-[1rem] xs:text-center'>
            {company}
          </p>

          <div className='flex space-x-2 my-2 xs:ml-6'>
            {stack.map(
              (logo: React.ImgHTMLAttributes<HTMLImageElement>, i: number) => {
                return (
                  <div key={`logo-${i}`} className='rounded-full'>
                    <img src={logo.src} className='w-12 h-12 object-cover' />
                  </div>
                )
              }
            )}
          </div>

          <p className='uppercase py-5 xs:py-3 xs:ml-6 font-bold'>
            {startTime} <i>-</i> {endTime}
          </p>

          <ul className='list-disc space-y-4 xs:space-y-2 ml-5 text-lg w-[300px] xs:px-4 xs:text-[13px]'>
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
