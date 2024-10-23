import React, { ReactElement, useRef } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'

import { experienceCardData, ExperienceData } from '../data/experienceCardData'
import { LeftArrow, RightArrow } from '../assets'
import ExperienceCard from './ExperienceCard'

const Experience: NextPage = (): ReactElement => {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const parentRef = useRef<HTMLInputElement | null>(null)

  const handleScroll = (direction: string) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current!.scrollLeft -= 300
    } else current!.scrollLeft += 300
  }

  return (
    <div className='h-screen flex relative overflow-hidden flex-col justify-evenly text-left md:flex-row max-w-full px-10 mx-auto items-center pt-32' ref={parentRef}>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4 xs:pl-6'>Experience</h3>

      <div className='absolute top-100 left-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('left')}>
        <Image
          src={LeftArrow}
          width={35}
          height={35}
          objectFit='cover'
          alt='LeftArrow'
        />
      </div>
      <div className='absolute top-100 right-[0] hover:cursor-pointer opacity-70 hover:opacity-40' onClick={() => handleScroll('right')}>
        <Image
          src={RightArrow}
          width={35}
          height={35}
          objectFit='cover'
          alt='LeftArrow'
        />
      </div>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-none overflow-hidden' ref={scrollRef}>
        {experienceCardData.map((experienceData: ExperienceData, i: number) => <ExperienceCard key={`experience-card-${i}`} {...experienceData} />)}
      </div>
    </div>
  )
}

export default Experience