import {AppThunk} from '../index.thunk';
import {logIn} from './auth.actions';
import {AuthApi} from '../../api/auth';
import {StorageHelper} from '../../helpers/storageHelper';
import {AuthDto} from "./types";

export const authUser = (data: AuthDto): AppThunk => {
    return async (dispatch) => {
        dispatch(logIn.request());
        try {
            const result = await AuthApi.signIn(data);
            StorageHelper.setAccessToken(result.token);
            dispatch(logIn.success(result))
        } catch (e) {
            dispatch(logIn.failure(e))
        }
    }
};