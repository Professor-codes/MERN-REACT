import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

export const ProductCard = (props) => {

    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <img src={props.product.image} alt={props.product.name} className="product-image" />
            <h3>{props.product.name}</h3>
            <h4>{props.product.price}</h4>
            <p>{props.product.description}</p>

            <button className='btn-add' onClick={() => dispatch(addToCart(props.product))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" />
                </svg>
            </button>
            
        </div>
    );
};
