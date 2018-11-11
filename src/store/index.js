import { createStore } from 'redux'
import reducer from './redusers'

const store = createStore(reducer)

window.store = store // так делать нельзя - здесь только для практики

export default store
