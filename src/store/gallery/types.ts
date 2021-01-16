export interface IPagingData<T = any> {
    hasMore: boolean
    page: number
    pageCount: number
    pictures: Array<T>;
}

export interface GalleryStateInterface {
    pictures: PicturePreviewModel[]
    hasMore: boolean | null
    page: number
    pageCount: number | null
    loadingPicturesList: boolean

    currentPicture: PictureModel | null
    loadingCurrentPicture: boolean
}

export interface PicturePreviewModel {
    id: string,
    cropped_picture: string,
}

export interface PictureModel {
    author: string,
    camera: string,
    cropped_picture: string,
    full_picture: string,
    id: string,
    tags: string,
}