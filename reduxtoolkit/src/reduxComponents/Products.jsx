import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import './Products.css'

export const Products = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="header">Products</h1>
            <div className="container">
                <div className="product">
                    <h3>Zebronics Zeb Max Ninja 61</h3>
                    <h4>$ 48.10</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        accusamus quam earum obcaecati itaque exercitationem dolorum eligendi
                        ullam eos aspernatur!
                    </p>
                    <button onClick={() => { dispatch(addToCart({ name: "Zebronics Zeb Max Ninja 61", price: "$ 48.10" })) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" /></svg>
                    </button>
                </div>
                <div className="product">
                    <h3>Bulfyss Clock</h3>
                    <h4>$ 18.04</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        accusamus quam earum obcaecati itaque exercitationem dolorum eligendi
                        ullam eos aspernatur!
                    </p>
                    <button onClick={() => { dispatch(addToCart({ name: "Bulfyss Clock", price: "$ 18.04" })) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" /></svg>
                    </button>
                </div>
                <div className="product">
                    <h3>EVM EnSave 256GB</h3>
                    <h4>$ 35.02</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        accusamus quam earum obcaecati itaque exercitationem dolorum eligendi
                        ullam eos aspernatur!
                    </p>
                    <button onClick={() => { dispatch(addToCart({ name: "EVM EnSave 256GB", price: "$ 35.02" })) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" /></svg>
                    </button>
                </div>
                <div className="product">
                    <h3>Immortal 131</h3>
                    <h4>$ 16.82</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        accusamus quam earum obcaecati itaque exercitationem dolorum eligendi
                        ullam eos aspernatur!
                    </p>
                    <button onClick={() => { dispatch(addToCart({ name: "Immortal 131", price: "$ 16.82" })) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
