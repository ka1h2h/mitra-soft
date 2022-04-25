import axios from "axios"
import { setCarsPhotos, setPhotosById } from "./Reducer"

export const requestCars = () => {
    return async dispatch => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
                .then(res => dispatch(setCarsPhotos(res.data)))
        } catch (e) {
            alert(e)
        }
    }
}

export const requestPhotosId = (id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
                .then(res => dispatch(setPhotosById(res.data)))
        } catch (e) {
            alert(e)
        }
    }
}








