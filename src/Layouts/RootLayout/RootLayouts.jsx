import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-285px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;