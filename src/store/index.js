import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger, { generateIdMw } from '../middleware'
import api from '../middleware/api'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import history from '../history'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(api),
  applyMiddleware(generateIdMw),
  applyMiddleware(logger)
  // other store enhancers if any
)
const store = createStore(reducer, enhancer)

window.store = store

export default store
