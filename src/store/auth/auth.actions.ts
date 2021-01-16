import {ActionType, createAsyncAction} from "typesafe-actions";
import {AuthModel} from "./types";

export enum AuthActions {
    LOG_IN = '[Auth] Log In ',
    LOG_IN_SUCCESS = '[Auth] Log In Success',
    LOG_IN_FAILED = '[Auth] Log In Failed',
}

export const logIn = createAsyncAction(
    AuthActions.LOG_IN,
    AuthActions.LOG_IN_SUCCESS,
    AuthActions.LOG_IN_FAILED
)<undefined, AuthModel, Error>();

export type TAuthActions = ActionType<typeof logIn>
