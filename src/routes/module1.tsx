import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import page1 from '../pages/module1/Page1'
import page2 from '../pages/module1/Page2'

const moduleRoute = ({ match }: any) => (
  <div>
    <h2>Hello module1~</h2>
    <ul>
      <li>
        <Link to={`${match.url}/page1`}>link-page1</Link>
      </li>
      <li>
        <Link to={`${match.url}/page2`}>link-page2</Link>
      </li>
    </ul>
    <Switch>
      <Route path={`${match.url}/page1`} component={page1} />
      <Route path={`${match.url}/page2`} component={page2} />
    </Switch>
  </div>
)

export default moduleRoute
