import React from 'react'
import './Progress.css'
import { TypeAnimation } from 'react-type-animation'

export const Progress = () => {
  return (
    <div className='content__box-progress'>
      <h1 className='progress__text-h1'>Progress</h1>
      <TypeAnimation
        sequence={[
          'Lorem Ipsum dolor sit amet progress first',
          1000,
          'Lorem Ipsum dolor sit amet progress second',
          1000,
          'Lorem Ipsum dolor sit amet progress third',
          1000,
          'Lorem Ipsum dolor sit amet progress fourth',
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

