import React from 'react'
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'
import stores from 'stores'
import { hot } from 'react-hot-loader'

import AppRouter from 'routes'

let Root = () => (
  <Provider {...stores}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
)

if (process.env.NODE_ENV !== 'production') {
  Root = hot(module)(Root)
}

export default Root
