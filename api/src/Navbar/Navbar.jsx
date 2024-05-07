import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link className='link' to='api-demo-1'>GET</Link>
                </li>
                <li>
                    <Link className='link' to='api-demo-2'>PUT</Link>
                </li>
                <li>
                    <Link className='link' to='api-demo-3'>POST</Link>
                </li>
                <li>
                    <Link className='link' to='api-demo-4'>DELETE</Link>
                </li>
                <li>
                    <Link className='link' to='project-1'>Project 1</Link>
                </li>
            </ul>
        </div>
    )
}
