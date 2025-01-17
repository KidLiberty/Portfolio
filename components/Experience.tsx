import { type ComponentPropsWithoutRef, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

import {
  AWSLogo,
  EthersJSLogo,
  FirebaseLogo,
  JavaLogo,
  JavaScriptLogo,
  LeftArrow,
  NextJSLogo,
  NodeJSLogo,
  OpenSeaLogo,
  PythonLogo,
  ReactLogo,
  ReactNativeLogo,
  RightArrow,
  SpringLogo,
  SolanaLogo,
  TypeScriptLogo
} from '../assets'


export default function Experience() {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const parentRef = useRef<HTMLInputElement | null>(null)

  const handleScroll = (direction: string) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current!.scrollLeft -= 300
    } else {
      current!.scrollLeft += 300
    }
  }

  return (
    <div className='max-w-full h-screen relative flex flex-col justify-evenly items-center mx-auto pt-32 px-10 overflow-hidden' ref={parentRef}>
      <h3 className='absolute top-24 pl-4 text-2xl tracking-[20px] uppercase text-gray-500'>Experience</h3>

      <div className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('left')}>
        <Image src={LeftArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
      </div>
      <div className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('right')}>
        <Image src={RightArrow} width={35} height={35} objectFit='cover' alt='LeftArrow' />
      </div>

      {/* Experience Cards */}
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 overflow-hidden scrollbar-none snap-x snap-mandatory scroll-smooth' ref={scrollRef}>
        <ExperienceCard
          headerStyle='text-[22px] sm:text-[32px] bg-gradient-to-r from-yellow-600 to-orange-500'
          jobTitle='Web3 Mobile Engineer'
          company='Boop Industries Inc.'
          stack={[TypeScriptLogo, ReactNativeLogo, FirebaseLogo, SolanaLogo]}
          startTime='October 2023'
          endTime='Present'
          summaryPoints={[
            'Built core peer-to-peer payments product with TypeScript, React Native, Node, Plaid and Google Firebase SDK while implementing crypto-to-fiat onramp, user authentication, and P2P transfers on iOS.',
            'Integrated TypeScript REST APIs into product by communicating directly with vendors.',
            'Organized React Context architecture in conjunction with Solana/web3.js.'
          ]}
        />
        <ExperienceCard
          headerStyle='text-[28px] sm:text-[32px] bg-gradient-to-r from-orange-600 to-red-500'
          jobTitle='Software Engineer'
          company='Lunar Labs LLC'
          stack={[TypeScriptLogo, ReactLogo, NextJSLogo, EthersJSLogo]}
          startTime='May 2023'
          endTime='Oct 2023'
          summaryPoints={[
            <span>Constructed component library with TypeScript and Next.js to handle Web3-specific user journeys for the <a style={{ color: '#007acc', }} href='https://moonwell.fi' target='_blank' rel='noopener noreferrer'>Moonwell.fi</a> dApp.</span>,
            'Built REST APIs to query on-chain specific JSON-RPC data and format data to UI.',
            'Utilized TypeScript wallet SDKs for Ethereum (ethers.js), Base & Solana (@solana/web3.js).',
          ]}
        />
        <ExperienceCard
          headerStyle='text-[26px] sm:text-[32px] bg-gradient-to-r from-red-600 to-blue-800'
          jobTitle='Front End Engineer'
          company='Right Click Save Ventures LLC'
          stack={[TypeScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo]}
          startTime='July 2022'
          endTime='May 2023'
          summaryPoints={[
            'Founding UI Developer for Web3 Investment Company.',
            'Built early stage institutional grade investment tooling for Web3 digital asset fund.',
            'Responsible for rapid UX design with JavaScript, React and Next.js.'
          ]}
        />
        <ExperienceCard
          headerStyle='text-[28px] sm:text-[32px] bg-gradient-to-r from-blue-800 to-green-600'
          jobTitle='Software Engineer'
          company='Fidelity Investments'
          stack={[AWSLogo, TypeScriptLogo, NodeJSLogo, JavaLogo]}
          startTime='January 2020'
          endTime='May 2023'
          summaryPoints={[
            'Integrated full-stack AWS services including EC2, DynamoDB, S3, API Gateway, and Lambda with respective TypeScript SDKs.',
            'Refactored and maintained legacy Java code while performing migrations from Java to TypeScript modules within core DevOps pipeline.',
            'Experience with Docker, Kubernetes, Jenkins and versioning control within pipeline.'
          ]}
        />
        <ExperienceCard
          headerStyle='text-[28px] sm:text-[32px] bg-gradient-to-r from-green-600 to-yellow-600'
          jobTitle='Front-End Intern'
          company='Sensible United LLC'
          stack={[JavaScriptLogo, ReactLogo, ReactNativeLogo, NodeJSLogo]}
          startTime='August 2018'
          endTime='December 2019'
          summaryPoints={[
            'Apprenticed as React Native intern under founding member of small fintech startup.',
            'Worked on core full-stack pipeline with an emphasis on Front-End architecture.',
            'Exposure to REST APIs with express and MongoDB.'
          ]}
        />
      </div>
    </div>
  )
}

type ExperienceCardData = ComponentPropsWithoutRef<'div'> & {
  headerStyle?: string
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: (string | JSX.Element)[]
}

function ExperienceCard({ headerStyle, jobTitle, company, stack, startTime, endTime, summaryPoints }: ExperienceCardData) {
  return (
    <div className='w-[300px] sm:w-[400px] flex flex-col flex-shrink-0 items-center rounded-xl text-[#3f4040] bg-[#c8c8c8] overflow-hidden snap-center shadow-md duration-200'>
      <div className='p-6'>
        <h4 className={`${headerStyle ?? ''} font-light bg-clip-text text-transparent`}>{jobTitle}</h4>
        <p className='text-2xl font-semibold'>{company}</p>
        <div className='flex space-x-2 my-2'>
          {stack.map((logo: React.ImgHTMLAttributes<HTMLImageElement>, i) => {
            return (
              <div
                key={`logo-${i}`}
                className={`${logo !== PythonLogo &&
                  logo !== NodeJSLogo &&
                  logo !== SpringLogo &&
                  logo !== ReactNativeLogo &&
                  'rounded-full bg-black'} 
                    ${logo === JavaLogo && 'bg-white'} 
                    ${logo === ReactNativeLogo && 'bg-[#333333] rounded-md'} 
                    `}
              >
                <img src={logo.src} className='w-12 h-12 object-cover rounded-md' />
              </div>
            )
          })}
        </div>
        <p className='pt-2  pb-4 font-bold uppercase'>{startTime} <i>-</i> {endTime}</p>
        <ul className='ml-5 space-y-2 text-md sm:text-lg list-disc'>
          {summaryPoints.map((summaryPoint: string | JSX.Element, i: number) => (
            <li key={`summaryPoint-${i}`} className='leading-5'>{summaryPoint}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}