import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import { ReactLogo } from '../assets'
import { StaticImageData } from 'next/image'

type Props = {
  directionLeft?: boolean
  logo: StaticImageData
  skill: string
}

const Skill = ({ directionLeft, logo, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -75 : 75, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={logo.src}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 xs:w-16 xs:h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
        <div className='flex items-center justify-center transition duration-300 ease-in-out h-full'>
          <p className='text-[0.9rem] font-bold text-black opacity-100'>
            {skill}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
