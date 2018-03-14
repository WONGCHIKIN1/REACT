import React from 'react'
import {createStore,applyMiddleware} from 'redux'

import {middleware} from './loginMiddleware'
import loginReducer from '../reducer/loginReducer'

const store = createStore(loginReducer,applyMiddleware(middleware));

export default store;