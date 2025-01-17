import { useState } from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

export default function Header() {
  const [gitHubHoverActive, setGitHubHoverActive] = useState(false)
  const [linkedInHoverActive, setLinkedInHoverActive] = useState(false)

  return (
    <header className='w-full max-w-7xl sticky top-0 flex items-center justify-between mx-auto p-6 z-20'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          className='hover:opacity-40 transition-all duration-200'
          url='https://github.com/brandonrstone'
          onMouseEnter={() => setGitHubHoverActive(true)}
          onMouseLeave={() => setGitHubHoverActive(false)}
          target='_blank'
          fgColor={gitHubHoverActive ? '#6e5494' : 'grey'}
          bgColor='transparent'
        />
        <SocialIcon
          className='hover:opacity-40 transition-all duration-200'
          url='https://www.linkedin.com/in/brandon-stone-8a319b163/'
          target='_blank'
          onMouseEnter={() => setLinkedInHoverActive(true)}
          onMouseLeave={() => setLinkedInHoverActive(false)}
          fgColor={linkedInHoverActive ? '#0072b1' : 'grey'}
          bgColor='transparent'
        />
      </div>

      <Link href='#contact'>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer hover:opacity-40 transition-all duration-200'>
          <SocialIcon network='email' fgColor='grey' bgColor='transparent' />
          <p className='uppercase xs:hidden md:inline-flex trext-sm text-gray-400'>Get in touch</p>
        </div>
      </Link>
    </header>
  )
}