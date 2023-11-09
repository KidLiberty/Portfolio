import React from 'react'
import { StaticImageData } from 'next/image'
import { NextPage } from 'next'
import { motion } from 'framer-motion'

import Skill from './Skill'

import {
  AlchemyLogo,
  EthersJSLogo,
  FirebaseLogo,
  GanacheLogo,
  GoogleCloudLogo,
  HardHat,
  HTML5Logo,
  JavaScriptLogo,
  MetaMaskLogo,
  NextJSLogo,
  NodeJSLogo,
  ReactLogo,
  ReduxLogo,
  SASSLogo,
  SolidityLogo,
  TailwindCSSLogo,
  ThirdwebLogo,
  TypeScriptLogo,
  Web3JSLogo
} from '../assets'

interface SkillTraits {
  logo: StaticImageData,
  skill: string
}

const Skills: NextPage = () => {
  const topSkillsData: SkillTraits[] = [
    { logo: JavaScriptLogo, skill: 'JavaScript' },
    { logo: ReactLogo, skill: 'React' },
    { logo: NextJSLogo, skill: 'Next.js' },
    { logo: TypeScriptLogo, skill: 'TypeScript' },
    { logo: ReduxLogo, skill: 'Redux' },
    { logo: TailwindCSSLogo, skill: 'Tailwindcss' },
    { logo: SASSLogo, skill: 'SASS' },
    { logo: HTML5Logo, skill: 'HTML5' },
    { logo: GoogleCloudLogo, skill: 'Google Cloud' },
    { logo: FirebaseLogo, skill: 'Firebase' },
    { logo: NodeJSLogo, skill: 'Node' }
  ]

  const bottomSkillsData: SkillTraits[] = [
    { logo: EthersJSLogo, skill: 'Ethers.js' },
    { logo: Web3JSLogo, skill: 'Web3.js' },
    { logo: MetaMaskLogo, skill: 'MetaMask' },
    { logo: SolidityLogo, skill: 'Solidity' },
    { logo: HardHat, skill: 'HardHat' },
    { logo: AlchemyLogo, skill: 'Alchemy' },
    { logo: ThirdwebLogo, skill: 'ThirdWeb' },
    { logo: GanacheLogo, skill: 'Ganache' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='h-screen relative flex flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto p-100'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-6'>
        Skills
      </h3>

      <h3 className='absolute top-36 text-md tracking-[3px] text-gray-500 mr-4 sm:text-[15px] pl-4 xs:pl-5'>
        What I work with; Always looking to expand
      </h3>

      <div className='grid grid-cols-4 gap-5 mt-40 '>
        {topSkillsData.map((skillProps: any, i: number) => (
          <Skill key={`skill-${i}`} {...skillProps} directionLeft />
        ))}
        {bottomSkillsData.map((skillProps: any, i: number) => (
          <Skill key={`skill-${i}`} {...skillProps} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
