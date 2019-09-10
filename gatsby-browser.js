/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/* globals window */

const React = require('react')
const { Router } = require('react-router-dom')
const { Provider } = require('react-redux')

const createStore = require('./src/state/createStore')

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  // console.log('history', history)

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
