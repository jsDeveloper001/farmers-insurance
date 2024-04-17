import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { children, createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const Authentication = ({ children }) => {
    // console.log(children)
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const GooglSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const GithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const LogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (User) => {
            if (User) {
                setUser(User)
            }
            else {
                setUser(null)
            }
        })
        return () => {
            unSubscribe()
        }
    })

    const authInformation = {
        GooglSignIn,
        GithubSignIn,
        user,
        LogOut
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;