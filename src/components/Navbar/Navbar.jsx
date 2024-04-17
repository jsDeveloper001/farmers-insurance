import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../services/Firebase Authentication/Authentication';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const HandleLogout = () => {
        LogOut()
            .then(() => {
                toast.success("User logged out")
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-500" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/updateProfile'} className={({ isActive }) => isActive ? "text-orange-500" : ""}>Update Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={'/'} className="Montez btn btn-ghost -ml-6 sm:ml-0 text-base sm:text-lg md:text-xl lg:text-3xl font-bold"><span className='text-green-600'>Farmers</span> Insurance</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-500" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/updateProfile'} className={({ isActive }) => isActive ? "text-orange-500" : ""}>Update Profile</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ?
                    <div className='flex items-center gap-10'>
                        <p>{user.displayName}</p>
                        <button className='btn text-white bg-red-600' onClick={HandleLogout}>Logout</button>
                    </div>
                    :
                    <Link to={'/login'} className="btn text-white bg-green-600">Log In</Link>}
            </div>
        </div>
    );
};

export default Navbar;