import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {CustomContext} from "../../index";
import firebase from "firebase/app"
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/auth'


const Login = () => {

    const {auth} = useContext(CustomContext)

    const Login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 0}}
                  alignItems={'center'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  rowGap={'60px'}
            >
                <div className='login__text'>
                    Welcome to Real Time Chat! <br/>
                    Please select registration method
                </div>
                <Grid
                    className='login__grid'
                    container
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <Box p={5}>
                        <Button onClick={Login} variant={'contained'}>LogIn with google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;