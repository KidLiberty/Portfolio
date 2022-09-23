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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col items-center'>
          <h4 className='mt-32 text-4xl font-normal text-center text-gray-500'>
            Feel free to reach out!
          </h4>
          <h3 className='text-lg  text-[#58765e]'>
            {"(Let's build something)"}
          </h3>
        </div>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 '>
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
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register('email')}
              className='contactInput'
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
            className='bg-transparent border-2 border-[#4290a1] p-4 rounded-[7px] text-[#4290a1] text-lg font-bold hover:bg-[#4290a1] hover:border-black hover:text-gray-800 transition-all duration-200'
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
