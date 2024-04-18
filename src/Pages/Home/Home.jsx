import React from 'react';
import '../../styles/Global.css'
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Farmers Insurance</title>
            </Helmet>
            <Header/>
        </div>
    );
};

export default Home;