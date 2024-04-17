import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Toaster/>
            <Outlet />
        </div>
    );
};

export default Root;