import {AppThunk} from "../index.thunk";
import {getImage, getImages} from "./gallery.actions";
import {ImageApi} from "../../api/images";

export const getAllImages = (page: number): AppThunk => {
    return async (dispatch) => {
        dispatch(getImages.request());
        try {
            const result = await ImageApi.getImagesList(page);
            dispatch(getImages.success(result))
        } catch (e) {
            dispatch(getImages.failure(e))
        }
    }
};


export const getCurrentImage = (id: string): AppThunk => {
    return async (dispatch) => {
        dispatch(getImage.request());
        try {
            const result = await ImageApi.getImageById(id);
            dispatch(getImage.success(result))
        } catch (e) {
            dispatch(getImage.failure(e))
        }
    }
};
