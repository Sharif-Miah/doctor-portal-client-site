import React from 'react';
import Carts from '../Carts/Carts';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import TakeAppointment from '../TakeAppointment/TakeAppointment';

const Home = () => {
    return (
        <div>
            <Hero />
            <Carts />
            <Services />
            <TakeAppointment />
        </div>
    );
};

export default Home;