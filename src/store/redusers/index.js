import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import selectReducer from './select'
import commentReducer, { reducerViaCommentComp } from './comments'

export default combineReducers({
  count: counterReducer, // здесь проходит инициализация дефолтовым значением = 0 из counterReduce, так как прогоняется тестовое action и оно != нашему 'INCREMENT' (см. './counter')
  articles: articleReducer,
  selectedOption: selectReducer,
  comments: commentReducer, // моя реализация
  comments_via_comm: reducerViaCommentComp // как на лекции
})
