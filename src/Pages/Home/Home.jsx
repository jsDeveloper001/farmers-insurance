import React from 'react';
import '../../styles/Global.css'
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Estates from '../../components/Estates/Estates';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Farmers Insurance</title>
            </Helmet>
            <Header/>
            <Estates></Estates>
        </div>
    );
};

export default Home;