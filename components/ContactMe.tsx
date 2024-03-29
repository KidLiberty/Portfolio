import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SocialIcon } from 'react-social-icons'

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe: NextPage = (): ReactElement => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:brandonrstone@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 xs:top-26 uppercase tracking-[20px] text-gray-500 text-2xl xs:left-20 xs:hidden'>
        Contact
      </h3>

      <div className='flex flex-col space-y-8 xs:relative xs:bottom-6'>
        <div className='flex flex-col items-center xs:h'>
          <h4 className='mt-32 tracking-[2px] text-3xl font-normal text-center text-gray-500 xs:text-2xl'>
            Feel free to reach out!
          </h4>
          <h3 className='text-lg tracking-[4px] text-[#5fddb3] xs:text-md'>
            {"(Let's build something)"}
          </h3>
        </div>

        <div className='xs:flex xs:flex-col xs:justify-center xs:items-center space-y-8 xs:space-y-2 xs:pr-10'>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#4290a1] w-7 h-7 animate-pulse' />
            <p className='text-2xl text-gray-500 xs:text-xl'>
              brandonrstone@gmail.com
            </p>
          </div>
          <div className='flex items-center space-x-[17px]'>
            <SocialIcon
              network='discord'
              fgColor='transparent'
              bgColor='#7289da'
              className='animate-pulse duration-700'
              style={{ width: '30px', height: '30px' }}
            />
            <p className='text-2xl text-gray-500 xs:text-xl'>
              Kid Liberty#3430
            </p>
          </div>
          <div className='flex items-center space-x-5 '>
            <MapPinIcon className='text-[#6b4787] w-7 h-7 animate-pulse' />
            <p className='text-2xl text-gray-500 xs:text-xl'>Worcester, MA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto xs:w-[350px] sm:pb-[24px] xs:pb-[36px]'
        >
          <div className='flex xs:flex-col xs:w-full space-x-2 xs:space-x-0 xs:space-y xs:justify-center'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register('email')}
              className='contactInput xs:mt-2'
              placeholder='Email'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            className='contactInput'
            placeholder='Subject'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message...'
          />
          <button
            className='bg-transparent border-2 border-[#5fddb3] p-4 xs:py-4 rounded-[7px] text-[#5fddb3] text-lg font-bold hover:bg-[#5fddb3] hover:border-black hover:text-gray-800 transition-all duration-200 xs:p-2 active:bg-[#5fddb3]/70'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
