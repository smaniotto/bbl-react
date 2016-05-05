import React from 'react'
import ReduxPromise from 'redux-promise'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import peopleApp from './reducers'
import App from './components/App.jsx'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render((
  <Provider store={createStoreWithMiddleware(peopleApp)}>
    <App/>
  </Provider>
), document.getElementById('root'))
