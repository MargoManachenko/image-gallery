import {ActionNames, getImages, TGalleryActions} from './gallery.actions'
import {getType} from 'typesafe-actions'
import {GalleryStateInterface} from './types'

export const initialState: GalleryStateInterface = {
    pictures: [],
    page: 0,
    hasMore: null,
    pageCount: null,
    loadingImages: false,
};

export function galleryReducer(state = initialState, action: TGalleryActions): GalleryStateInterface {
    switch (action.type) {

        case getType(getImages.request): {
            return {
                ...state,
                loadingImages: true,
            }
        }

        case getType(getImages.success): {
            return {
                ...state,
                loadingImages: true,
                hasMore: action.payload.hasMore,
                pageCount: action.payload.pageCount,
                pictures: action.payload.pictures,
            }
        }
        case getType(getImages.failure): {
            return {
                ...state,
                loadingImages: false,
            }
        }
        case ActionNames.SET_PAGE_NUMBER_IMAGES: {
            return {
                ...state,
                page: action.payload,
            }
        }

        default:
            return state
    }
}
