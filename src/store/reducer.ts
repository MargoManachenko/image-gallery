import {combineReducers} from 'redux';
import {authReducer} from "./auth/auth.reducer";
import {AuthStateInterface} from "./auth/types";

export interface RootStateModel {
    auth: AuthStateInterface,
}

export const reducers = combineReducers<RootStateModel>({
    auth: authReducer,
});
