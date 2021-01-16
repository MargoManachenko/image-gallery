import {logIn, TAuthActions} from './auth.actions';
import {AuthStateInterface} from './types';
import {getType} from 'typesafe-actions'
import {AuthState} from "../../constants/authState";

const initialState: AuthStateInterface = {
    userAuth: AuthState.UNCHECKED,
};

export function authReducer(state = initialState, action: TAuthActions): AuthStateInterface {
    switch (action.type) {
        case getType(logIn.request): {
            return {
                ...state,
                userAuth: AuthState.CHECKING,
            }
        }
        case getType(logIn.success): {
            return {
                ...state,
                userAuth: action.payload.auth ? AuthState.AUTHORIZED : AuthState.UNAUTHORIZED,
            }
        }
        case getType(logIn.failure): {
            return {
                ...state,
                userAuth: AuthState.UNCHECKED,
            }
        }
        default:
            return state
    }
}