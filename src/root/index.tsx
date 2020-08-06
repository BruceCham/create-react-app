import React from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'

import AppRouter from '../routes/index'

let Root = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }

if (process.env.NODE_ENV !== 'production') {
  Root = hot(module)(Root)
}

export default Root
