import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase/app"
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
    apiKey: "AIzaSyDYvYrflCZwxtemEcxpoK2Nz0nCwyd1OGY",
    authDomain: "realtime-chat-f639b.firebaseapp.com",
    projectId: "realtime-chat-f639b",
    storageBucket: "realtime-chat-f639b.appspot.com",
    messagingSenderId: "940793596476",
    appId: "1:940793596476:web:a6acd8909653b2226a9139",
    measurementId: "G-WC6CSPEQZP"
});

export const CustomContext = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <CustomContext.Provider value={{
            firebase,
            firestore,
            auth
        }}>
            <App/>
        </CustomContext.Provider>
    </BrowserRouter>
);
