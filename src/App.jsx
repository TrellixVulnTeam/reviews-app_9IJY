import React from 'react'
import Menu from './components/Menu.jsx'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import mySaga from './sagas/index.js'

import './styles/App.scss'
import ListReviews from './components/ListReviews.jsx'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>My React App!</h1>
        <Menu />
        <ListReviews />
      </div>
    </Provider>
  )
}

export default App
