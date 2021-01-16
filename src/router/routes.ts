import {UnAuthLayout} from "../layouts/unAuth";
import {AuthLayout} from "../layouts/auth";

export const AuthRoutes = [
    {
        exact: false,
        path: '/',
        component: AuthLayout
    }
];

export const UnAuthRoutes = [
    {
        exact: false,
        path: '/',
        component: UnAuthLayout
    }
];