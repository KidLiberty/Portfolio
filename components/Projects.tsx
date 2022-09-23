import React, { useState } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import { ReactLogo } from '../assets/index'

type Props = {}

const Projects: NextPage = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5]

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 '>
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-full'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={ReactLogo.src}
              alt='Project_Image'
            />

            <div className='space-y-10 px-0 md:px-10 w-max-6xl'>
              <h4 className='text-2xl font-semibold text-center first-letter:'>
                <span className='underline'>
                  Current work {i + 1} of project {projects.length}:
                </span>
              </h4>

              <p className='text-lg text-center md:text-left'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#477ad2]/10 left-0 h-[400px] -skew-y-12' />
    </div>
  )
}

export default Projects
