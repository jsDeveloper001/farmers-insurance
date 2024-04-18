import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Estate from '../Estate/Estate';

const Estates = () => {
    const Estates = useLoaderData()
    console.log(Estates)
    return (
        <div className='mt-14'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl text-gray-700'>Explore Your Estates</h2>
                <p className='mt-2'>Delivering iconic Agricultural land, Farm land and Plantation land properties.
                    More than 100 projects are ongoing at the moment.</p>
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Estates.map((estate, idx) => <Estate key={idx} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;