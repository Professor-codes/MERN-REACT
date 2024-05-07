import React from 'react'
import './Plan.css'
import { TypeAnimation } from 'react-type-animation'

export const Plan = () => {
  return (
    <div className='content__box-plan'>
      <h1 className='plan__text-h1'>Plan</h1>
      <TypeAnimation
        sequence={[
          'Lorem Ipsum dolor sit amet plan first',
          1000,
          'Lorem Ipsum dolor sit amet plan second',
          1000,
          'Lorem Ipsum dolor sit amet plan third',
          1000,
          'Lorem Ipsum dolor sit amet plan fourth',
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
