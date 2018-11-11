import { createStore, applyMiddleware } from 'redux'
import reducer from './redusers'
import logger from '../middleware'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, enhancer)

window.store = store // так делать нельзя - здесь только для практики

export default store
