
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-5aef7.firebaseapp.com",
  projectId: "authexamnotes-5aef7",
  storageBucket: "authexamnotes-5aef7.firebasestorage.app",
  messagingSenderId: "722318381844",
  appId: "1:722318381844:web:afb65d583eb29ead58a801"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}