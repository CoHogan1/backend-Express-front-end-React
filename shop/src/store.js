import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// not needed cuz file name'./reducers/index.js'

import rootReducer from './reducers'

const initalState = {}

const middleware = [thunk]

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store
