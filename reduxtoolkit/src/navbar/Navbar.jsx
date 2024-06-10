import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to="product">Product</Link>
                    </li>
                    <li>
                        <Link className='link' to="cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
