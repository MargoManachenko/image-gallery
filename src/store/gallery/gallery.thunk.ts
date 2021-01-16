import {AppThunk} from "../index.thunk";
import {getImages} from "./gallery.actions";
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
