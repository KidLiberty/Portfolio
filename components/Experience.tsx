import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import ExperienceCard from './ExperienceCard'

type Props = {}

const Experience: NextPage = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col justify-evenly text-left md:flex-row max-w-full px-10 mx-auto items-center pt-32'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience
