import React from 'react'
import { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

import {
  AlchemyLogo,
  AngularLogo,
  AWSLogo,
  DockerLogo,
  DrizzleLogo,
  EthersJSLogo,
  FirebaseLogo,
  GoogleCloudLogo,
  HardHat,
  HTML5Logo,
  KubernetesLogo,
  MetaMaskLogo,
  NextJSLogo,
  NodeJSLogo,
  ReactLogo,
  ReactNativeLogo,
  SolidityLogo,
  TailwindCSSLogo,
  TypeScriptLogo,
  Web3JSLogo
} from '../assets'

type SkillTraits = {
  className?: string
  logo: StaticImageData | JSX.Element,
  skill: string
}

export default function Skills() {
  const topSkillsData: SkillTraits[] = [
    { logo: TypeScriptLogo, skill: 'TypeScript' },
    { logo: ReactLogo, skill: 'React' },
    { logo: ReactNativeLogo, skill: 'React Native' },
    { logo: NodeJSLogo, skill: 'Node.js' },
    { logo: NextJSLogo, skill: 'Next.js' },
    { logo: DrizzleLogo, skill: 'Drizzle ORM' },
    { logo: TailwindCSSLogo, skill: 'Tailwindcss' },
    { logo: HTML5Logo, skill: 'HTML5' },
    { logo: FirebaseLogo, skill: 'Google Firebase' },
    { logo: GoogleCloudLogo, skill: 'Google Cloud' }
  ]

  const bottomSkillsData: SkillTraits[] = [
    { logo: DockerLogo, skill: 'Docker' },
    { logo: KubernetesLogo, skill: 'Kubernetes' },
    { logo: AngularLogo, skill: 'Angular' },
    { logo: AWSLogo, skill: 'Amazon Web Services' },
    { logo: EthersJSLogo, skill: 'Ethers.js' },
    { logo: Web3JSLogo, skill: 'Web3.js' },
    { logo: MetaMaskLogo, skill: 'MetaMask' },
    { logo: SolidityLogo, skill: 'Solidity' },
    { logo: HardHat, skill: 'HardHat' },
    { logo: AlchemyLogo, skill: 'Alchemy' }
  ]

  return (
    <motion.div
      className='min-h-screen relative flex flex-col justify-center items-center text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-6'>Skills</h3>

      <h3 className='absolute top-40 text-sm sm:text-lg text-center tracking-[3px] text-gray-500 sm:whitespace-nowrap'>
        What I work with<b>;</b> <br className='block sm:hidden' />
        Always looking to expand
      </h3>

      <div className='grid grid-cols-4 gap-6 mt-36'>
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

type SkillProps = {
  className?: string
  directionLeft?: boolean
  logo: StaticImageData
  skill: string
}

function Skill({ className, directionLeft, logo, skill }: SkillProps) {
  return (
    <div className='relative flex group cursor-default'>
      <motion.img
        className={`${className ?? ''} w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] rounded-full border border-gray-500 object-cover
        filter group-hover:grayscale transition duration-300 ease-in-out`}
        initial={{ x: directionLeft ? -75 : 75, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={logo.src}
      />

      <div className='w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] absolute opacity-0 group-hover:opacity-80 group-hover:bg-white rounded-full overflow-hidden transition duration-300 ease-in-out'>
        <div className='h-full flex items-center justify-center transition duration-300 ease-in-out'>
          <p className='text-[0.8rem] sm:text-[0.9rem] text-black text-center font-bold opacity-100 cursor-default'>{skill}</p>
        </div>
      </div>
    </div>
  )
}