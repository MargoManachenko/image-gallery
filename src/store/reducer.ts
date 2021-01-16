import {combineReducers} from 'redux';
import {authReducer} from "./auth/auth.reducer";
import {AuthStateInterface} from "./auth/types";
import {galleryReducer} from "./gallery/gallery.reducer";
import {GalleryStateInterface} from "./gallery/types";

export interface RootStateModel {
    auth: AuthStateInterface,
    gallery: GalleryStateInterface,
}

export const reducers = combineReducers<RootStateModel>({
    auth: authReducer,
    gallery: galleryReducer
});
