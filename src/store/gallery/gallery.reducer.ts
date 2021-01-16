import {ActionNames, getImage, getImages, TGalleryActions} from './gallery.actions'
import {getType} from 'typesafe-actions'
import {GalleryStateInterface} from './types'

export const initialState: GalleryStateInterface = {
    pictures: [],
    page: 0,
    hasMore: null,
    pageCount: null,
    loadingPicturesList: false,

    currentPicture: null,
    loadingCurrentPicture: false,
};

export function galleryReducer(state = initialState, action: TGalleryActions): GalleryStateInterface {
    switch (action.type) {

        case getType(getImages.request): {
            return {
                ...state,
                loadingPicturesList: true,
            }
        }

        case getType(getImages.success): {
            return {
                ...state,
                loadingPicturesList: true,
                hasMore: action.payload.hasMore,
                pageCount: action.payload.pageCount,
                pictures: action.payload.pictures,
            }
        }
        case getType(getImages.failure): {
            return {
                ...state,
                loadingPicturesList: false,
            }
        }
        case ActionNames.SET_PAGE_NUMBER_IMAGES: {
            return {
                ...state,
                page: action.payload,
            }
        }

        case getType(getImage.request): {
            return {
                ...state,
                loadingPicturesList: true,
            }
        }

        case getType(getImage.success): {
            return {
                ...state,
                loadingPicturesList: false,
                currentPicture: action.payload
            }
        }

        case getType(getImage.failure): {
            return {
                ...state,
                loadingPicturesList: false,
            }
        }

        default:
            return state
    }
}
