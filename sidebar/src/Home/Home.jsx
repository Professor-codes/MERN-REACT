import React from 'react'
import './Home.css'
import { TypeAnimation } from 'react-type-animation'

export const Home = () => {
  return (
    <div className='content__box-home'>
      <h1 className='home__text-h1'>Home</h1>
      <TypeAnimation
        sequence={[
          'Lorem Ipsum dolor sit amet home first',
          1000,
          'Lorem Ipsum dolor sit amet home second',
          1000,
          'Lorem Ipsum dolor sit amet home third',
          1000,
          'Lorem Ipsum dolor sit amet home fourth',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', color: 'white', fontFamily: 'Dancing Script', letterSpacing: '2px' }}
        repeat={Infinity}
      />
    </div>
  )
}
