import React, {useEffect, useMemo} from 'react';
import {AuthRoutes, UnAuthRoutes} from "./routes";
import {Redirect, Route, Switch} from 'react-router-dom';
import {useReduxState} from "../helpers/use-redux-state";
import {AuthState} from "../constants/authState";
import {StorageHelper} from "../helpers/storageHelper";
import {useDispatch} from "react-redux";
import {authUser} from "../store/auth/auth.thunk";
import {apiKey} from "../api/auth";

export const RouterModule = () => {

    const dispatch = useDispatch();
    const {auth: {userAuth}} = useReduxState();

    useEffect(() => {
        if (StorageHelper.getAccessToken()) {
            dispatch(authUser({apiKey: apiKey}))
        }
    }, [dispatch]);

    const activeRoutes = useMemo(() => {
        return userAuth === AuthState.AUTHORIZED ? AuthRoutes : UnAuthRoutes;
    }, [userAuth]);

    return <Switch>
        {activeRoutes.map((route, index) => (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
        ))}
        <Redirect to={'/'} from={'/'}/>
    </Switch>
};