import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/component/Shared/Footer/Footer';
import Navber from '../pages/component/Shared/Navbar/Navber';

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;