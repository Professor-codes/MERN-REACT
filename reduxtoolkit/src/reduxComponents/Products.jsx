import React from 'react';
import './Products.css';
import { useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';

const products = [
    {
        name: 'Zebronics Zeb Max Ninja 61',
        price: '$ 48.10',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://m.media-amazon.com/images/I/61UOaC2r2-L._SX522_.jpg',
    },
    {
        name: 'Bulfyss Clock',
        price: '$ 18.04',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://m.media-amazon.com/images/I/61wnwiAPtSL._SX679_.jpg',
    },
    {
        name: 'EVM EnSave 256GB',
        price: '$ 35.02',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://m.media-amazon.com/images/I/411vuq7lxXL._SX679_.jpg',
    },
    {
        name: 'Immortal 131',
        price: '$ 16.82',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/r/m/g/-original-imahy33zyhngucsh.jpeg?q=70&crop=false',
    },
];

export const Products = () => {

    // const [showCart, setShowCart] = useState(false);

    const cartState = useSelector((state) => state);

    console.log(cartState.cart.cart.length);

    return (
        <div>
            <h1 className="header">
                <Link className='link' to="/">
                    <svg className="home" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.75 10a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm14.72 2.53a.75.75 0 1 0 1.06-1.06zM12 3l.53-.53a.75.75 0 0 0-1.06 0zm-9.53 8.47a.75.75 0 1 0 1.06 1.06zM7 21.75h10v-1.5H7zM19.75 19v-9h-1.5v9zm-14 0v-9h-1.5v9zm15.78-7.53l-9-9l-1.06 1.06l9 9zm-10.06-9l-9 9l1.06 1.06l9-9zM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75z" /></svg>
                </Link>
                Products
                <Link className='link' to="/cart">
                    <span className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
                                <circle cx="25" cy="27" r="2" />
                                <circle cx="12" cy="27" r="2" />
                            </g>
                        </svg>
                        &nbsp;{cartState.cart.cart.length}
                    </span>
                </Link>

            </h1>

            {
                <div className="container">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            }
        </div>
    );
};
