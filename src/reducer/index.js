import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer, { articlesObjectReducer } from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import pagesReducer from './comment_pages'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  articleObject: articlesObjectReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  commentPages: pagesReducer
})
