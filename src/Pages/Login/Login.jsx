import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../services/Firebase Authentication/Authentication';
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';


const Login = () => {
    const { GooglSignIn, GithubSignIn, user, SignInEmailPassword } = useContext(AuthContext)
    const navigate = useNavigate()

    // Authenticate by Email and Password
    const HandleSubmit = (e) => {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        if (!user) {
            SignInEmailPassword(Email, Password)
                .then(() => {
                    toast.success("Successfully logged in")
                    navigate('/')
                })
                .catch(error => {
                    console.log(error)
                    toast.error("Invalid Email/Password")
                })
        }
        else {
            toast.error("Already Logged In")
        }
    }

    // Authenticate by Google Account
    const SignWithGoogle = () => {
        if (!user) {
            GooglSignIn()
                .then(() => {
                    toast.success("Successfully logged in with Google")
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error)
                    toast.error("An error occurred")
                })
        }
        else {
            toast.error("Already Logged In")
        }
    }

    // Authenticate by Github Account
    const SignWithGithub = () => {
        if (!user) {
            GithubSignIn()
                .then(() => {
                    toast.success("Successfully logged in with Github")
                    navigate('/')
                })
                .catch(error => {
                    console.log(error)
                    toast.error("An error occurred")
                })
        }
        else {
            toast.error("Already Logged In")
        }
    }

    return (
        <div className='flex justify-center mt-10 h-auto'>
            <div className='bg-yellow-50 p-7 rounded-md'>
                <h2 className='text-4xl text-center font-bold'>Sign In</h2>
                <div>
                    <form className='mt-5' onSubmit={HandleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <input type="email" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your email' name='email' required />
                            <input type="password" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your password' name='password' required />
                            <button className='btn bg-blue-600 text-white font-semibold mt-2'>Login</button>
                        </div>
                    </form>
                    {/* social login */}
                    <div className='my-5 flex gap-2 items-center justify-center'>
                        <div className='bg-gray-100 btn w-1/2' onClick={SignWithGoogle}>
                            <FaGoogle className='text-3xl text-blue-500' />
                        </div>
                        <div className='bg-gray-100 btn w-1/2' onClick={SignWithGithub}>
                            <FaGithub className='text-3xl text-green-600' />
                        </div>
                    </div>
                </div>
                <p>Haven't have any account? please <Link to={'/register'} className='underline text-blue-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;