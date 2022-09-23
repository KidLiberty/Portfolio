import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard: NextPage = ({}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:w-[200px] object-cover object-center '
        src={require('../assets/haki.png')}
        alt='Company_Logo'
      />

      <div className='px-0 md:px-10'>
        <div className='mb-20'>
          <h4 className='text-4xl font-light'>Front-End Engineer</h4>
          <p className='text-2xl font-bold mt-1'>
            Right Click Save Ventures LLC
          </p>
          <div className='flex space-x-2 my-2'>
            <img src='' alt='tech' />
            <img src='' alt='tech' />
            <img src='' alt='tech' />
            <img src='' alt='tech' />
          </div>
          <p className='uppercase py-5 text-gray-300'>July 2022 - Present</p>

          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
