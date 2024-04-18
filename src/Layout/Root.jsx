import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                <Toaster />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;