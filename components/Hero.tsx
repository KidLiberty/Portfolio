import { NextPage } from 'next'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero: NextPage = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi there, I'm Brandon", 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  )
}

export default Hero
