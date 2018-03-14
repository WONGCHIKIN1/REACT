import React from 'react'
import {createStore,applyMiddleware} from 'redux'

import {middleware} from './changeMiddleware'
import changeReducer from '../reducer/changeReducer.js'

const store = createStore(changeReducer,applyMiddleware(middleware));

export default store;