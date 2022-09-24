import React from 'react'

type Props = {
  jobTitle: string
  company: string
  stack: Array<any>
  startTime: string
  endTime: string
  summaryPoints: Array<string>
}

const ExperienceCard = ({
  jobTitle,
  company,
  stack,
  startTime,
  endTime,
  summaryPoints
}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 transition-opacity duration-200 overflow-hidden xs:px-20'>
      <div className='px-0 md:px-10 pt-10'>
        <div className='mb-20'>
          <h4 className='text-4xl xs:text-[1.75rem] font-light xs:text-md xs:text-center'>
            {jobTitle}
          </h4>
          <p className='text-2xl font-bold mt-1 xs:text-[1rem] xs:text-center'>
            {company}
          </p>
          <div className='flex space-x-2 my-2 xs:ml-3'>
            {stack.map((logo: any, i: number) => {
              return (
                <div key={`logo-${i}`} className='rounded-full'>
                  <img src={logo.src} className='w-11 h-11 object-cover' />
                </div>
              )
            })}
          </div>
          <p className='uppercase py-5 text-gray-300 xs:ml-3'>
            {startTime} - {endTime}
          </p>

          <ul className='list-disc space-y-4 ml-5 text-lg w-[300px]'>
            {summaryPoints.map((summaryPoint: string, i: number) => {
              return <li key={`summaryPoint-${i}`}>{summaryPoint}</li>
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
