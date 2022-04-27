import { GET_PHOTOS, GET_PHOTOS_BY_ID } from "./Action"

const initialState = {
    photos: [],
    photosById: [],
    loader: true,
    loaderId: true,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loader: false,
                loaderId: true
            }
        case GET_PHOTOS_BY_ID:
            return {
                ...state,
                photosById: action.payload,
                loaderId: false
            }
        default:
            return state
    }
}





