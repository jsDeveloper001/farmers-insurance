import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { children, createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const Authentication = ({ children }) => {
    // console.log(children)
    const [user, setUser] = useState(null)
    const [updateUser, setUpdateUser] = useState(false)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const GooglSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const GithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const SignUpEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
    }, [updateUser])

    const authInformation = {
        GooglSignIn,
        GithubSignIn,
        user,
        SignUpEmailPassword,
        SignInEmailPassword,
        updateUser,
        setUpdateUser,
        LogOut
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;