import React, { useState } from 'react'
import './UseStateDemo.css'

export const UseStateDemo = () => {

    // useState

    // count    : variable
    // setCount : function
    // useState : hook
    // (0)      : initial value
    const [count, setCount] = useState(0)  // Number
    const [status, setStatus] = useState(true)  // Boolean
    const [display, setDisplay] = useState()

    // const [] = useState([])   // Array
    // const [] = useState({})   // Object
    // const [] = useState()    // Any

    // UPDATE STATE
    // First -> Virtual Dom
    // Second -> Original Dom

    // let count = 0
    const user_defined_function = () => {
        // count = count + 1

        // setCount
        setCount(count + 1)

        // console.log(count)
    }

    return (
        <div>
            <h1 className='header'>Use State Demo</h1>

            <p className='count'>Count : {count}</p>

            <button onClick={() => { user_defined_function() }}>Click to add</button>

            <p className='status'>Status : {status ? "Run" : "Terminate"}</p>
            <button onClick={() => { setStatus(false) }}>Terminate</button>




        </div>
    )
}
