import React, { useContext } from 'react';
import { AuthContext } from '../../services/Firebase Authentication/Authentication';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../../services/Firebase/Firebase.config';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user, setUpdateUser, updateUser } = useContext(AuthContext)
    const HandleUpdate = e => {
        e.preventDefault()
        const Name = e.target.name.value;
        const PhotoUrl = e.target.photo.value;
        if (Name) {
            updateProfile(auth.currentUser, {
                displayName: Name,
            })
                .then(() => {
                    toast.success("Your Name Updated")
                    setUpdateUser(!updateUser)
                    e.target.reset()
                })
            return
        }
        if (Name && PhotoUrl) {
            updateProfile(auth.currentUser, {
                displayName: Name, photoURL: PhotoUrl
            })
                .then(() => {
                    toast.success("Profile Updated")
                    setUpdateUser(!updateUser)
                    e.target.reset()
                })
            return
        }
        if (PhotoUrl) {
            updateProfile(auth.currentUser, {
                photoURL: PhotoUrl
            })
                .then(() => {
                    toast.success("Display Photo Updated")
                    setUpdateUser(!updateUser)
                    e.target.reset()
                })
            return
        }
        else {
            toast.error("Noting to Update")
            return
        }

    }
    return (
        <div className='flex justify-center mt-5'>
            <Helmet>
                <title>Farmers Insurance | Update Profile</title>
            </Helmet>
            {user &&
                <div className='border px-8 rounded-md py-3 flex flex-col items-center'>
                    <h2 className='font-bold text-xl'>Hello, <span className='text-blue-600'>{user.displayName}</span></h2>
                    <div className='mt-10'>
                        <img src={user.photoURL} alt="Profile Image" className='w-24 h-24 ring rounded-full' />
                    </div>
                    <p className='mt-2'>{user.email}</p>
                    <form className='mt-5' onSubmit={HandleUpdate}>
                        <div className='flex flex-col gap-3'>
                            <input type="text" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your new name' name='name' />
                            <input type="url" className='border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='enter your profile picture' name='photo' />
                            <button className='btn bg-green-600 text-white font-semibold mt-2'>Update</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default UpdateProfile;