import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <nav>
                <ul className='nest-ul'>
                    <li className='nest-li'>
                        <Link className='link' to="/about/about-project/1">Project</Link>
                    </li>
                    <li className='nest-li'>
                        <Link className='link' to="/about/about-team/2">Team</Link>
                    </li>
                    <li className='nest-li'>
                        <Link className='link' to="/about/about-company/3">Company</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
