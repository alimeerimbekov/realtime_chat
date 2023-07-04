import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import {CustomContext} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {


    const {auth} = useContext(CustomContext)
    const [user] = useAuthState(auth)
    const location = useLocation()


    return (
        <nav className="navbar" style={{display: location.pathname === '/login' ? 'none' : ''}}>
            <AppBar position="static">
                <Toolbar variant={'dense'}>
                    <Grid container justifyContent={'flex-end'} marginRight={'-500px'}>
                        <p className='navbar__text'>
                            You are in the chat, please enjoy the chat.
                        </p>
                    </Grid>
                    <Grid container justifyContent={'flex-end'} columnGap={'10px'}>
                        {user ?
                            <Button onClick={() => auth.signOut()} variant={'contained'}>Exit</Button>
                            :
                            <NavLink to={'/login'}>
                                <Button variant={'contained'}>LogIn</Button>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </nav>


    );
};

export default Navbar;