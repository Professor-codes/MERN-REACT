import React from 'react'
import './Cart.css'
import { TypeAnimation } from 'react-type-animation'

export const Cart = () => {
  return (
    <div className='content__box-cart'>
      <h1 className='cart__text-h1'>Cart</h1>
      <TypeAnimation
        sequence={[
          'Lorem Ipsum dolor sit amet cart first',
          1000,
          'Lorem Ipsum dolor sit amet cart second',
          1000,
          'Lorem Ipsum dolor sit amet cart third',
          1000,
          'Lorem Ipsum dolor sit amet cart fourth',
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

