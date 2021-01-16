import {AuthPage} from "../pages/auth";

export const AuthRoutes = [
    {
        exact: false,
        path: '/',
        component: null
    }
];

export const UnAuthRoutes = [
    {
        exact: false,
        path: '/',
        component: AuthPage
    }
];