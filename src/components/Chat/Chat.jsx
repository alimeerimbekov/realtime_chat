import React, {useContext, useState} from 'react';
import {CustomContext} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Box, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase/app"


const Chat = () => {

    const {auth, firestore} = useContext(CustomContext)
    const [user] = useAuthState(auth)

    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )


    const sendMess = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader/>
    }

    console.log(messages)

    return (
        <Container>

            <Grid container
                  style={{height: window.innerHeight - 68, marginTop: 20}}
                  justifyContent={'center'}
                  className='chat'
            >
                <div className='chat__content'>
                    {
                        messages.map(mess =>
                            <div style={{
                                marginLeft: user.uid === mess.uid ? 'auto' : '10px',
                            }} className='chat__message'>
                                {
                                    user.uid === mess.uid ?
                                        <>
                                            <div className='chat__message-top'>
                                                <Grid container>
                                                    <div style={{
                                                        color: user.uid === mess.uid ? 'blue' : 'red',
                                                        fontSize: '14px'
                                                    }}>
                                                        {mess.displayName}
                                                    </div>
                                                </Grid>
                                                <div className='chat__message-text'>{mess.text}</div>
                                            </div>
                                            <Avatar src={mess.photoURL}/>
                                        </> :
                                        <>
                                            <Avatar src={mess.photoURL}/>
                                            <div className='chat__message-top'>
                                                <Grid container>
                                                    <div style={{
                                                        color: user.uid === mess.uid ? 'blue' : 'red',
                                                        fontSize: '14px'
                                                    }}>
                                                        {mess.displayName}
                                                    </div>
                                                </Grid>
                                                <div className='chat__message-text'>{mess.text}</div>
                                            </div>
                                        </>
                                }
                            </div>
                        )
                    }
                </div>
                <Grid
                    container
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{width: '80%'}}
                    className='chat__send'

                >
                    <TextField
                        rowsMax={2}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className='chat__field'
                    />
                    <Button onClick={sendMess} variant={'contained'}>GET</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;