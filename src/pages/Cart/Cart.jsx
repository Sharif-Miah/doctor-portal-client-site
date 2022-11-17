import React from 'react';

const Cart = ({ cart }) => {
    const { img, title, describtions, className } = cart;
    return (
        <div className={`card card-side  shadow-xl ${className} px-5 text-white`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{describtions}</p>
            </div>
        </div>
    );
};

export default Cart;