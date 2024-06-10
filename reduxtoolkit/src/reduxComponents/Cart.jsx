import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';

export const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    return (
        <div>
            <h1 className='header'>Cart</h1>
            <div className="cart-container">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item.name))} className="btn-delete">
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    );
};
