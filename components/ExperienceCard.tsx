import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  jobTitle: string
  company: string
  stack: Array<any>
  startTime: string
  endTime: string
  summaryPoints: Array<string>
}

const ExperienceCard = ({
  jobTitle,
  company,
  stack,
  startTime,
  endTime,
  summaryPoints
}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
        src={require('../assets/haki.png')}
        alt='Company_Logo'
      />

      <div className='px-0 md:px-10'>
        <div className='mb-20'>
          <h4 className='text-4xl font-light'>{jobTitle}</h4>
          <p className='text-2xl font-bold mt-1'>{company}</p>
          <div className='flex space-x-2 my-2'>
            {stack.map((logo, i) => {
              return (
                <div className='rounded-full'>
                  <img
                    key={`logo-${i}`}
                    src={logo.src}
                    className='w-11 h-11 object-cover'
                  />
                </div>
              )
            })}
          </div>
          <p className='uppercase py-5 text-gray-300'>
            {startTime} - {endTime}
          </p>

          <ul className='list-disc space-y-4 ml-5 text-lg'>
            {summaryPoints.map((summaryPoint, i) => {
              return <li key={`summaryPoint-${i}`}>{summaryPoint}</li>
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
