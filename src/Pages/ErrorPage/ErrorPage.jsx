import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div id="error-page" className="text-center">
                <h1 className="text-6xl font-bold mb-4">Oops!</h1>
                <p className="text-lg font-semibold">
                    <i>404. This Page not exist</i>
                </p>
                <NavLink to={'/'}><button className="btn mt-4 primary-bg text-green-600 font-bold">Back to Home</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;