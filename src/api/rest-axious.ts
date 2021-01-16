import axios from 'axios';
import {StorageHelper} from "../helpers/storageHelper";
// import {HttpRequestError} from '../helpers/errorsHelper';
// import {store} from '../store/store';
// import {errorDetected} from '../store/error/error.actions'
// import {TYPED_ENV} from "../helpers/typedEnv";

export const axiosRest = axios.create({
    baseURL: 'http://interview.agileengine.com'
});

axiosRest.interceptors.request.use(
    async (resp) => {
        const jwtToken = StorageHelper.getAccessToken();
        if (jwtToken) {
            resp.headers['Authorization'] = `Bearer ${jwtToken}`;
        } else {
            StorageHelper.clear();
        }
        return resp;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            StorageHelper.clear();
        } else {
        }
        // throw new HttpRequestError(error.response.status, error.response.statusText || '');
    }
);

axiosRest.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // store.dispatch(errorDetected(error.response.data));
    return Promise.reject(error)
});