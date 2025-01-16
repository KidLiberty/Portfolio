import type { ComponentPropsWithoutRef } from 'react'
import { StaticImageData } from 'next/image'

import { JavaLogo, NodeJSLogo, PythonLogo, ReactNativeLogo, SpringLogo } from '../assets'

type ExperienceData = ComponentPropsWithoutRef<'div'> & {
  headerStyle?: string
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: (string | JSX.Element)[]
}

export default function ExperienceCard({ headerStyle, jobTitle, company, stack, startTime, endTime, summaryPoints }: ExperienceData) {
  return (
    <article className='w-[400px] flex flex-col flex-shrink-0 items-center rounded-xl text-[#3f4040] bg-[#c8c8c8] shadow-md duration-200 overflow-hidden snap-center'>
      <div className='p-4'>
        <h4 className={`${headerStyle ?? ''} text-3xl font-light pb-1 bg-clip-text text-transparent`}>
          {jobTitle}
        </h4>
        <p className='text-2xl font-semibold'>{company}</p>
        <div className='flex space-x-2 my-2'>
          {stack.map((logo: React.ImgHTMLAttributes<HTMLImageElement>, i) => {
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
        <p className='uppercase pb-4 pt-2 font-bold'>{startTime} <i>-</i> {endTime}</p>
        <ul className='w-[300px] space-y-2 ml-4 text-lg list-disc'>
          {summaryPoints.map((summaryPoint: string | JSX.Element, i: number) =>
            <li key={`summaryPoint-${i}`} className='leading-5'>
              {summaryPoint}
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}