import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ImageGallery} from "../../pages/image-gallery";
import {PictureInfo} from "../../pages/picture-info";

export const Pages = [
    {
        exact: true,
        path: `/`,
        component: ImageGallery
    },
    {
        exact: true,
        path: `/img/:id`,
        component: PictureInfo
    },
];

export const AuthLayout = () => {
    return <Switch>
        {Pages.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
        ))}
    </Switch>
};
