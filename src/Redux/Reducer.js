const GET_PHOTOS = 'GET_PHOTOS'
const GET_PHOTOS_BY_ID = 'GET_PHOTOS_BY_ID'

const initialState = {
    cars: [],
    carsById: [],
    loader: true,
    loaderId: true,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return {
                ...state,
                cars: action.payload,
                loader: false,
                loaderId: true
            }
        case GET_PHOTOS_BY_ID:
            return {
                ...state,
                carsById: action.payload,
                loaderId: false
            }
        default:
            return state
    }
}

export const setCarsPhotos = (payload) => ({ type: GET_PHOTOS, payload });
export const setPhotosById = (payload) => ({ type: GET_PHOTOS_BY_ID, payload })




