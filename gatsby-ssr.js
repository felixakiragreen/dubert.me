/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const createStore = require('./src/state/createStore')
require('dotenv').config()

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const store = createStore()

  // Connect Redux store
  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
