import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LogIn} from "../../pages/auth";

const Pages = [
    {
        exact: true,
        path: `/`,
        component: LogIn
    },
];

export const UnAuthLayout: React.FC = () => {
    return <Switch>
        {Pages.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
        ))}
    </Switch>
};
