import { useContext } from 'react';
import { AuthContext } from '../services/Firebase Authentication/Authentication';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if(user){
        return children
    }
    if(loading){
        return <div className='flex justify-center'><span className="loading loading-dots loading-md"></span></div>
    }
    return <Navigate to={'/login'}></Navigate>
};

export default ProtectedRoute;