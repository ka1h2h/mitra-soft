import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import { Reducer } from './Reducer'
import thunk from 'redux-thunk';
import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware()

const store = createStore(Reducer, applyMiddleware(thunk, saga));

window.store = store

saga.run(sagaWatcher)


export default store
