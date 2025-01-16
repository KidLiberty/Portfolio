import { motion } from 'framer-motion'

import { PortfolioPic } from '../assets'

export default function About() {
  return (
    <div className='h-screen relative flex flex-col justify-evenly items-center text-center px-10 overflow-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-5'>
        About
      </h3>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        src={PortfolioPic.src}
        className='w-64 h-88 mt-32 -mb-20 rounded-lg overflow-hidden'
        alt='About_Pic'
      />

      <div className='relative flex flex-col items-center space-y-10'>
        <div className='text-[32px] font-semibold'>
          <span className='relative inset-0 top-[28px] text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-green-500'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-[30px] left-0.5 text-[#343236]'>
            Here is a <i>little</i> background
          </span>
          <span className='absolute inset-0 top-[32px] left-1.5 text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-blue-300'>
            Here is a <i>little</i> background
          </span>
        </div>
        <p className='max-w-[700px] text-justify text-[14px] pb-14 sm:text-[16px] text-gray-300 leading-5 sm:leading-5'>
          Hey there! I'm a developer from the Northeast 🍂🌊 who has worked across web,
          DevOps, financial, and decentralized technology over the past five years.
          I have also had a fascination with what I've seen on the web and the language
          that builds it since 2014. Combining my experience has given me the privilege
          of working with talented teams building websites, deployed Web3 dApps, core product
          functionality and Native mobile applications on iOS. These days, I'm looking to
          contribute by doing what I love ⚛️.
        </p>
      </div >
    </div >
  )
}