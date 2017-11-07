import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Leben from './modules/Leben'
import Projekte from './modules/Projekte'

import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projekte" component={Projekte}/>
      <Route path="/leben" component={Leben}/>
    </Route>
  </Router>
), document.getElementById('app'))
