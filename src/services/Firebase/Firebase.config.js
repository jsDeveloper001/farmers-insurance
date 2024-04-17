import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDj4KWT7p_cVA1hKDueqhwyTyxYQLiBiJo",
    authDomain: "farmers-insurance-1fcd4.firebaseapp.com",
    projectId: "farmers-insurance-1fcd4",
    storageBucket: "farmers-insurance-1fcd4.appspot.com",
    messagingSenderId: "529067632328",
    appId: "1:529067632328:web:5ea1b446ff31f8e40ba7fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth