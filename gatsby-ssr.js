/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import createStore from './src/state/createStore'
import dotenv from 'dotenv'
dotenv.config()
// require('dotenv').config()

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const store = createStore()

  // Connect Redux store
  const ConnectedBody = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  )

  replaceBodyHTMLString(
    renderToString(<ConnectedBody />)
  )
}