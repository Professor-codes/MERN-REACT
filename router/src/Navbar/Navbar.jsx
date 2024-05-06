import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <ul className='left-ul'>
                    <li className='li_left'>
                        <Link className='link' to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="white"><path d="M17 21H7a2 2 0 0 1-2-2v-9l7-7l7 7v9a2 2 0 0 1-2 2" opacity="0.16" /><path d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z" /></g></svg>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className='li_right'>
                        <Link className='link' to="/about">About</Link>
                    </li>
                    <li className='li_right'>
                        <Link className='link' to="/services">Services</Link>
                    </li>
                    <li className='li_right'>
                        <Link className='link' to="/contact">Contact</Link>
                    </li>
                    <li className='li_right'>
                        <Link className='link' to="/pricing">Pricing</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
