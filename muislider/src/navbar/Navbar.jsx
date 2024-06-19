import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to="single-slider">FIRST</Link>
                    </li>
                    <li>
                        <Link className='link' to="single-slider-exact-value">SECOND</Link>
                    </li>
                    <li>
                        <Link className='link' to="double-slider">THIRD</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
