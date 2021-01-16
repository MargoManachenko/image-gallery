import {axiosRest} from "../rest-axious";

export class ImageApi {

    static async getImagesList(page: number) {
        return (await axiosRest.get(`/images`, {params: {page}})).data;
    }

    static async getImageById(id: string) {
        return (await axiosRest.get(`/images/${id}`)).data;
    }
}