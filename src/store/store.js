/* eslint-disable indent */
import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './reducer'
export const store = configureStore({ reducer: rootReducers })
// import { createStore } from 'redux'

// import combineReducers from './reducer'

// export const store = createStore(combineReducers)

export default store
