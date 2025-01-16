import React from 'react'
import { motion } from 'framer-motion'

import { StaticImageData } from 'next/image'

type SkillProps = {
  className?: string
  directionLeft?: boolean
  logo: StaticImageData
  skill: string
}

export default function Skill({ className, directionLeft, logo, skill }: SkillProps) {
  return (
    <div className='group relative flex cursor-default'>
      <motion.img
        className={`${className ?? ''} rounded-full border border-gray-500 object-cover
        w-[5.5rem] h-[5.5rem] xs:w-16 xs:h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter 
        group-hover:grayscale transition duration-300 ease-in-out`}
        initial={{ x: directionLeft ? -75 : 75, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={logo.src}
      />

      <div
        className='absolute opacity-0 group-hover:opacity-80 transition 
        duration-300 ease-in-out group-hover:bg-white h-[5.5rem] w-[5.5rem] 
        rounded-full md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 xs:w-16 xs:h-16 overflow-hidden'
      >
        <div className='flex items-center justify-center transition duration-300 ease-in-out h-full'>
          <p className='text-[0.9rem] font-bold text-black opacity-100 cursor-default'>
            {skill}
          </p>
        </div>
      </div>
    </div>
  )
}