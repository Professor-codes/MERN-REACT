import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.75 10a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm14.72 2.53a.75.75 0 1 0 1.06-1.06zM12 3l.53-.53a.75.75 0 0 0-1.06 0zm-9.53 8.47a.75.75 0 1 0 1.06 1.06zM7 21.75h10v-1.5H7zM19.75 19v-9h-1.5v9zm-14 0v-9h-1.5v9zm15.78-7.53l-9-9l-1.06 1.06l9 9zm-10.06-9l-9 9l1.06 1.06l9-9zM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75z" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/deposite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16"><path fill="currentColor" d="m8 16l-2-3h1v-2h2v2h1zm7-15v8H1V1zm1-1H0v10h16z" /><path fill="currentColor" d="M8 2a3 3 0 1 1 0 6h5V7h1V3h-1V2zM5 5a3 3 0 0 1 3-3H3v1H2v4h1v1h5a3 3 0 0 1-3-3" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/withdraw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16"><path fill="currentColor" d="m8 0l2 3H9v2H7V3H6zm7 7v8H1V7zm1-1H0v10h16z" /><path fill="currentColor" d="M8 8a3 3 0 1 1 0 6h5v-1h1V9h-1V8zm-3 3a3 3 0 0 1 3-3H3v1H2v4h1v1h5a3 3 0 0 1-3-3" /></svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
