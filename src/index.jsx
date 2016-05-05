import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import peopleApp from './reducers'
import App from './components/App.jsx'

let store = createStore(peopleApp)

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
