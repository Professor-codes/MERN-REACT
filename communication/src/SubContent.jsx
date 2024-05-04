import React from 'react'
import './SubContent.css'

export const SubContent = (props) => {
  return (
    <div>
        <h1 className='subcontent'>SubContent</h1>
        <p>{props.subdata.title}</p>
        <p>{props.subdata.desc}</p>

    </div>
  )
}
