import React from 'react'
import {createStore,applyMiddleware} from 'redux'

import {middleware} from './registerMiddleware'
import registerReducer from '../reducer/registerReducer.js'

const store = createStore(registerReducer,applyMiddleware(middleware));

export default store;