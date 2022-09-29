import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles: NextPage = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{ duration: 2.5 }}
      className='relative top-24 flex justify-center items-center'
    >
      <div className='absolute border border-[#3d3f41] rounded-full h-[200px] w-[200px] sm:h-[100px] sm:w-[100px] mt-52 ping' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] mt-52' />
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] sm:h-[400px] sm:w-[400px] mt-52' />
      <div className='absolute border border-[#9270c9] rounded-full h-[650px] w-[650px] sm:h-[550px] sm:w-[550px]  mt-52 opactiy-20 animate-pulse' />
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] sm:h-[675px] sm:w-[675px] mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles
