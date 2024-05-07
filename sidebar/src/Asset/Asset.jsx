import React from 'react'
import './Asset.css'
import { TypeAnimation } from 'react-type-animation'

export const Asset = () => {
  return (
    <div className='content__box-asset'>
      <h1 className='asset__text-h1'>Asset</h1>
      <TypeAnimation
        sequence={[
          'Lorem Ipsum dolor sit amet asset first',
          1000,
          'Lorem Ipsum dolor sit amet asset second',
          1000,
          'Lorem Ipsum dolor sit amet asset third',
          1000,
          'Lorem Ipsum dolor sit amet asset fourth',
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