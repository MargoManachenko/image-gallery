import {AuthState} from "../../constants/authState";

export interface AuthStateInterface {
    userAuth: AuthState
}

export interface AuthDto {
    apiKey: string
}

export interface AuthModel {
    auth: boolean,
    token: string,
}