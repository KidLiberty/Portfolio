import React from 'react'
import { NextPage } from 'next'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe: NextPage = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:brandonrstone@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xs:hidden'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col items-center xs:h'>
          <h4 className='mt-32 tracking-[2px] text-3xl font-normal text-center text-gray-500'>
            Feel free to reach out!
          </h4>
          <h3 className='text-lg tracking-[4px] text-[#5fddb3]'>
            {"(Let's build something)"}
          </h3>
        </div>

        <div className='xs:flex xs:flex-col xs:justify-center xs:items-center space-y-10 xs:pr-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#4290a1] w-7 h-7 animate-pulse' />
            <p className='text-2xl text-gray-500'>+1 978 855 5511</p>
          </div>
          <div className='flex items-center space-x-5 '>
            <EnvelopeIcon className='text-[#4290a1] w-7 h-7 animate-pulse' />
            <p className='text-2xl text-gray-500'>brandonrstone@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 '>
            <MapPinIcon className='text-[#4290a1] w-7 h-7 animate-pulse' />
            <p className='text-2xl text-gray-500'>Worcester, MA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto xs:w-[350px] xs:pb-32 '
        >
          <div className='flex xs:flex-col xs:w-full space-x-2 xs:space-x-0 xs:justify-center'>
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
            className='bg-transparent border-2 border-[#5fddb3] p-4 rounded-[7px] text-[#5fddb3] text-lg font-bold hover:bg-[#5fddb3] hover:border-black hover:text-gray-800 transition-all duration-200 xs:p-2'
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
