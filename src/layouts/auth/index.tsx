import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ImageGallery} from "../../pages/image-gallery";

export const Pages = [
    {
        exact: true,
        path: `/`,
        component: ImageGallery
    },
];

export const AuthLayout = () => {
    return <Switch>
        {Pages.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
        ))}
    </Switch>
};
