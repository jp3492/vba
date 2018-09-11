import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

import reducers from './reducer'

import App from './App'
import Welcome from './pages/Welcome'
import Projects from './pages/Projects'
import Users from './pages/Users'
import Player from './pages/Player'
import Modal from './common/Modal'

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route path="/welcome" component={Welcome} />
        <Route path="/welcome/:auth" component={Modal} />
        <Route path="/projects/:search" component={Projects} />
        <Route path="/projects/:search/:id" component={Modal} />
        <Route path="/users/:search" component={Users} />
        <Route path="/users/:search/:id" component={Modal} />
        <Route path="/player/:id/:filter" component={Player} />
        <Route path="/player/:id/:filter/:action" component={Modal} />
      </App>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
)
