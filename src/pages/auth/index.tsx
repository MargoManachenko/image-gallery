import React, {useCallback} from 'react';
import {Button, Typography} from "@material-ui/core";
import {authUser} from "../../store/auth/auth.thunk";
import {useDispatch} from "react-redux";
import {apiKey} from "../../api/auth";

export const LogIn = () => {
    const dispatch = useDispatch();

    const logIn = useCallback(() => {
        dispatch(authUser({apiKey: apiKey}))
    }, [dispatch]);

    return <div>
        <Typography>You are not logged in</Typography>
        <Button variant="contained" color="primary" onClick={logIn}>Log In</Button>
    </div>;
};