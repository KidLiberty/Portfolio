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
    <div className='relative flex group cursor-default'>
      <motion.img
        className={`${className ?? ''} w-[5rem] h-[5rem] sm:w-[5.5rem] sm:h-[5.5rem] rounded-full border border-gray-500 object-cover
        filter group-hover:grayscale transition duration-300 ease-in-out`}
        initial={{ x: directionLeft ? -75 : 75, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={logo.src}
      />

      <div className='w-[5rem] h-[5rem] sm:w-[5.5rem] sm:h-[5.5rem] absolute opacity-0 group-hover:opacity-80 group-hover:bg-white rounded-full overflow-hidden transition duration-300 ease-in-out'>
        <div className='h-full flex items-center justify-center transition duration-300 ease-in-out'>
          <p className='text-[0.8rem] sm:text-[0.9rem] text-black text-center font-bold opacity-100 cursor-default'>
            {skill}
          </p>
        </div>
      </div>
    </div>
  )
}