import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Cart from '../Cart/Cart';

const Carts = () => {

    const cartsData = [
        {
            id: 1,
            title: 'Opening Hours',
            describtions: 'Lorem Ipsum is simply dummy text of the pri',
            img: clock,
            className: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            title: 'Visit our location',
            describtions: 'Brooklyn, NY 10036, United States',
            img: marker,
            className: 'bg-accent'

        },
        {
            id: 3,
            title: 'Contact us now',
            describtions: '+000 123 456789',
            img: phone,
            className: 'bg-gradient-to-r from-primary to-secondary'
        },

    ]

    return (
        <div className='my-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cartsData.map(cart => <Cart key={cart.id} cart={cart} />)
                }
            </div>
        </div>
    );
};

export default Carts;