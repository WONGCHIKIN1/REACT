import React from 'react'
import {createStore, applyMiddleware} from 'redux'

import middleware from './middleware.js'
import rootReducer from '../reduct/rootReducer.js'


const store = createStore(rootReducer,applyMiddleware(middleware));

export default store;