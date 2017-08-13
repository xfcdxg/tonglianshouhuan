import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

export default (
  () => (
    <Router history={ hashHistory } >
      <Route path='/' component={ require('react-router?name=root!./components/') } >
        <IndexRoute component={ require('react-router?name=home!./components/home') } />
        <Route path='intro' component={ require('react-router?name=sh-intro!./components/sh-intro') } />
        <Route path='/app/:type' component={ require('react-router?name=app-intro!./components/app-intro') } />
        <Route path='/card/:type' component={ require('react-router?name=card-intro!./components/card-intro') } />
      </Route>
    </Router>
  )
)
