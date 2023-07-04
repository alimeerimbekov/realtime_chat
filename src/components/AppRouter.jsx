import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import {CustomContext} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {

    const {auth} = useContext(CustomContext)
    const [user] = useAuthState(auth)

    console.log(user)
    return user ?
        (
            <>
                <Routes>
                    <Route path={'/chat'} element={<Chat/>}/>
                </Routes>
                <Navigate to={'/chat'}/>
            </>
        )
        :
        (
            <>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
                <Navigate to={'/login'}/>
            </>
        )
};

export default AppRouter;