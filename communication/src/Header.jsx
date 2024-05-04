import React from 'react'
import './Header.css'

// HEADER USING rafc 
export const Header = (props) => {

    return (
        <div>
            <h1 className='header'>Header</h1>
            <p>{props.h}</p>
        </div>
    )
}
