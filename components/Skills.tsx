import React from 'react'
import { StaticImageData } from 'next/image'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Skill from './Skill'

import {
  Alchemy,
  CSS3Logo,
  EthersJSLogo,
  GanacheLogo,
  HardHat,
  HTML5Logo,
  JavaScriptLogo,
  MetaMaskLogo,
  NextJSLogo,
  NodeJSLogo,
  ReactLogo,
  SASSLogo,
  SolidityLogo,
  TailwindCSSLogo,
  TypeScriptLogo,
  Web3JSLogo
} from '../assets'

interface SkillData {
  logo: StaticImageData
}

type Props = {}

const Skills: NextPage = ({}: Props) => {
  const topSkillsData: Array<Object> = [
    { logo: JavaScriptLogo, skill: 'JavaScript' },
    { logo: ReactLogo, skill: 'React' },
    { logo: NextJSLogo, skill: 'Next.js' },
    { logo: TypeScriptLogo, skill: 'TypeScript' },
    { logo: HTML5Logo, skill: 'HTML5' },
    { logo: SASSLogo, skill: 'SASS' },
    { logo: TailwindCSSLogo, skill: 'Tailwindcss' },
    { logo: NodeJSLogo, skill: 'Node' }
  ]

  const bottomSkillsData: Array<Object> = [
    { logo: EthersJSLogo, skill: 'Ethers.js' },
    { logo: Web3JSLogo, skill: 'Web3.js' },
    { logo: MetaMaskLogo, skill: 'MetaMask' },
    { logo: SolidityLogo, skill: 'Solidity' },
    { logo: Alchemy, skill: 'Alchemy' },
    { logo: HardHat, skill: 'HardHat' },
    { logo: GanacheLogo, skill: 'Ganache' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='h-screen flex flex-col relative justify-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center p-100'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 text-md tracking-[3px] text-gray-500 mr-4 sm:text-[15px]'>
        What I work with; Always looking to expand
      </h3>

      <div className='grid grid-cols-4 gap-5 mt-40 '>
        {topSkillsData.map((skillProps: any, i: number) => {
          return <Skill key={`skill-${i}`} {...skillProps} directionLeft />
        })}
        {bottomSkillsData.map((skillProps: any, i: number) => {
          return <Skill key={`skill-${i}`} {...skillProps} />
        })}
      </div>
    </motion.div>
  )
}

export default Skills
