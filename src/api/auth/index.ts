import {axiosRest} from "../rest-axious";
import {AuthDto} from "../../store/auth/types";

export const apiKey = '23567b218376f79d9415';

export class AuthApi {
    static async signIn(data: AuthDto) {
        return (await axiosRest.post('/auth', data)).data;
    }
}