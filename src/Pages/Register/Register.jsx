import { useContext, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../services/Firebase Authentication/Authentication';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../../services/Firebase/Firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate()
    const { SignUpEmailPassword, updateUser, setUpdateUser, user } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const HandleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        if (!/(?=.*[A-Z])/.test(Password)) {
            setError("Must have an Uppercase letter")
            return
        }
        if (!/(?=.*[a-z])/.test(Password)) {
            setError("Must have a Lowercase letter")
            return
        }
        if (Password.length < 6) {
            setError("Length must be at least 6 character")
            return
        }
        const Name = e.target.name.value;
        const Image = e.target.image.value;

        if (!user) {
            SignUpEmailPassword(Email, Password)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: Name, photoURL: Image
                    })
                        .then(() => {
                            setUpdateUser(!updateUser)
                            toast.success("Successfully Register")
                            toast.success("Successfully logged in")
                            navigate('/')

                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch(error => {
                    console.log(error)
                    toast.error("try with anther email")
                })
        }
        else {
            toast.error("Please logout first")
        }
    }
    return (
        <div className='flex justify-center mt-10 h-auto'>
            <Helmet>
                <title>Farmers Insurance | Sign Up</title>
            </Helmet>
            <div className='bg-yellow-50 p-7 rounded-md'>
                <h2 className='text-4xl text-center font-bold'>Sign Up</h2>
                <div>
                    <form className='mt-5' onSubmit={HandleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <input type="text" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your full name' name='name' required />
                            <input type="email" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your email' name='email' required />
                            <input type="url" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter your profile pic url' name='image' />
                            <div className='relative'>
                                <input type={showPass ? "text" : "password"} className='w-full border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your password' name='password' required />
                                <span className='absolute right-2 top-4 hover:cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <button className='btn bg-blue-600 text-white font-semibold mt-2'>Submit</button>
                        </div>
                    </form>
                </div>
                <p className='mt-5'>Already an have Account? please <Link to={'/login'} className='underline text-blue-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;