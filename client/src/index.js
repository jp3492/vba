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
import Projects from './pages/Projects/projects'
import Users from './pages/Users/users'
import Player from './pages/Player'
import Modal from './common/Modal'

import Header from './common/Header'

const store = createStore(
  reducers,
  {
    user: { token: localStorage.getItem('token') } 
  },
  applyMiddleware(reduxThunk, logger)
)

axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

console.log(axios.defaults.headers);


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Header />
        <Route path="/" exact component={Welcome} />
        <Route path="/authentication/:auth" component={Modal} />
        <Route path="/projects/:folder/:search" component={Projects} />
        <Route path="/projects/:folder/:search/:type/:id" component={Modal} />
        <Route path="/users/:folder/:search" component={Users} />
        <Route path="/users/:folder/:search/:type/:id" component={Modal} />
        <Route path="/player/:id/:filter" component={Player} />
        <Route path="/player/:id/:filter/:type" component={Modal} />
      </App>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
)
