import React, {useMemo} from 'react';
import {UnAuthRoutes} from "./routes";
import {Redirect, Route, Switch} from 'react-router-dom';

export const RouterModule = () => {

    const activeRoutes = useMemo(() => {
        return UnAuthRoutes;
    }, []);

    return <Switch>
        {activeRoutes.map((route, index) => (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={route.component}
            />
        ))}
        <Redirect to={'/'} from={'/'}/>
    </Switch>
};