import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

import Button from './components/button'
import Card from './components/card'
import Header from './components/header'
import Modal from './components/modal'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Header />
          <Card />
          <Button />
          <Modal />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
