/* global window:true */
/* eslint no-underscore-dangle: 0 */

import { createStore } from 'redux'
import rootReducer from './index'

export default (initialState) => {
  // const devtools = process.env.NODE_ENV === 'development' && window.devToolsExtension
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   : f => f

  // const store = createStore(rootReducer, devtools)
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./index', () => {
      const nextReducer = require('./index')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
