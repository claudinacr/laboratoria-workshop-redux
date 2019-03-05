import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
// We import these two different stufF
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'


// We invoke creation of the store
// REDUX DEV TOOLS: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// We inspect the store methods
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
