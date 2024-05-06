import React from 'react'
import './AlertFun.css'
import { AlertCall } from './AlertCall'

export const AlertFun = () => {

    const test = () => {
        alert("Hey, What's going on?")
    }

    return (
        <div>
            <h1 className='alert'>Alert Function</h1>

            <AlertCall t={test}/>
        </div>
    )
}
