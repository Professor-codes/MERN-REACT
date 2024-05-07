import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to="form">FORM</Link>
                    </li>
                    <li>
                        <Link className='link' to="validation">VALIDATION</Link>
                    </li>
                    <li>
                        <Link className='link' to="mode">MODE</Link>
                    </li>
                    <li>
                        <Link className='link' to="task">STUDENT FORM</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
