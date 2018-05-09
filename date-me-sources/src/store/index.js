import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'

import { reducer, initialState } from '../reducers'


const configureStore = () =>
  createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(logger),
    )
  )

export default configureStore()
