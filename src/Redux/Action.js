export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
export const GET_PHOTOS = 'GET_PHOTOS'
export const REQUEST_PHOTOS_BY_ID = 'REQUEST_PHOTOS_BY_ID'
export const GET_PHOTOS_BY_ID = 'GET_PHOTOS_BY_ID'

export function fetchPhotos() {
    return {
        type: REQUEST_PHOTOS
    }
}

export function fetchPhotosById(id) {
    return {
        type: REQUEST_PHOTOS_BY_ID, id
    }
}





