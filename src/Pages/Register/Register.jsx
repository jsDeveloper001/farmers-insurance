import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            Register

            <p>Already an have Account? please <Link to={'/login'} className='underline text-blue-600'>Login</Link></p>
        </div>
    );
};

export default Register;