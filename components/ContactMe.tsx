import { useForm, SubmitHandler } from 'react-hook-form'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons'

type FormInputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe() {
  const { register, handleSubmit } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = formData => window.location.href = `mailto:brandonrstone@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`

  return (
    <div className='max-w-full h-screen relative flex flex-col items-center justify-evenly mx-auto overflow-hidden z-0'>
      <h3 className='absolute top-24 text-center text-2xl tracking-[20px] text-gray-500 uppercase'>Contact</h3>

      <div className='flex flex-col space-y-6 mt-24 lg:mt-36'>
        <div className='flex flex-col items-center sm:mb-16'>
          <h4 className='text-2xl sm:text-4xl text-center text-gray-500 tracking-[2px] font-normal'>Feel free to reach out!</h4>
          <h3 className='text-md sm:text-xl mt-2 tracking-[4px] text-[#5fddb3]'>(Let's build something)</h3>
        </div>

        <div className='flex flex-col justify-center items-center space-y-4 text-gray-500'>
          <div className='flex items-center space-x-4'>
            <EnvelopeIcon className='w-7 h-7 text-[#fdf3f3] animate-pulse' />
            <p className='text-lg sm:text-2xl'>brandonrstone@gmail.com</p>
          </div>
          <div className='flex items-center space-x-4'>
            <SocialIcon
              network='telegram'
              fgColor='transparent'
              bgColor='#24A1DE'
              className='animate-pulse duration-700'
              style={{ width: '30px', height: '30px' }}
            />
            <p className='text-lg sm:text-2xl'>brandonrstone</p>
          </div>
          <div className='flex items-center space-x-4'>
            <SocialIcon
              network='discord'
              fgColor='transparent'
              bgColor='#7289da'
              className='animate-pulse duration-700'
              style={{ width: '30px', height: '30px' }}
            />
            <p className='text-lg sm:text-2xl'>Kid Liberty#3430</p>
          </div>
          <div className='flex items-center space-x-4'>
            <MapPinIcon className='w-8 h-8 text-[#d7608c] animate-pulse' />
            <p className='text-lg sm:text-2xl'>Worcester, MA</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center space-x-2'>
            <input className='hidden sm:block contactInput py-4' type='text' placeholder='Name'{...register('name')} />
            <input className='hidden sm:block contactInput py-4' type='email' placeholder='Email' {...register('email')} />
          </div>
          <input className='sm:hidden contactInput' type='text' placeholder='Name'{...register('name')} />
          <input className='sm:hidden contactInput' type='email' placeholder='Email' {...register('email')} />
          <input className='contactInput' placeholder='Subject' {...register('subject')} />
          <textarea className='contactInput' placeholder='Message...' {...register('message')} />
          <button className='contactButton' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}