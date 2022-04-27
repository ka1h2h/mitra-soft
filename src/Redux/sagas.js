import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_PHOTOS, REQUEST_PHOTOS, REQUEST_PHOTOS_BY_ID, GET_PHOTOS_BY_ID } from './Action'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_PHOTOS, requestPhotosWorker)
    yield takeEvery(REQUEST_PHOTOS_BY_ID, requestPhotosByIdWorker)
}

function* requestPhotosWorker() {
    const payload = yield call(fetchPhotos)
    yield put({ type: GET_PHOTOS, payload })
}

function* requestPhotosByIdWorker({ id }) {
    const payload = yield call(fetchPhotosById, id)
    yield put({ type: GET_PHOTOS_BY_ID, payload })
}


async function fetchPhotos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
    return await res.json()
}

async function fetchPhotosById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return await res.json()
}

