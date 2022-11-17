import React from 'react';
import Carts from '../Carts/Carts';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <Carts />
            <Services />
            <TakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;