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
                    <Link className='link' to='search'>SEARCH</Link>
                </li>
                <li>
                    <Link className='link' to='userdetails'>DETAILS</Link>
                </li>
                <li>
                    <Link className='link' to='updateuser'>UPDATE</Link>
                </li>
                <li>
                    <Link className='link' to='gorestapi-get'>GOREST GET</Link>
                </li>
                <li>
                    <Link className='link' to='gorestapi-post'>GOREST POST</Link>
                </li>
                <li>
                    <Link className='link' to='project-1'>DEMO 1</Link>
                </li>
                <li>
                    <Link className='link' to='peoject-2'>DEMO 2</Link>
                </li>
            </ul>
        </div>
    )
}
