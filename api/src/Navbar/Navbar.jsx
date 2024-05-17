import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link className='link' to='get'>GET</Link>
                </li>
                <li>
                    <Link className='link' to='post'>POST</Link>
                </li>
                <li>
                    <Link className='link' to='put'>PUT</Link>
                </li>
                <li>
                    <Link className='link' to='delete'>DELETE</Link>
                </li>
                <li>
                    <Link className='sublink' to='userdetails'>DETAILS</Link>
                </li>
                <li>
                    <Link className='sublink' to='updateuser'>UPDATE</Link>
                </li>
                <li>
                    <Link className='link' to='project-1'>Project 1</Link>
                </li>
                <li>
                    <Link className='link' to='peoject-2'>Project 2</Link>
                </li>
            </ul>
        </div>
    )
}
