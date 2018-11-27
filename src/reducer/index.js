import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer, { articlesObjectReducer } from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import pagesReducer from './comment_pages'
import { connectRouter } from 'connected-react-router'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  count: counterReducer,
  articles: articlesReducer,
  articleObject: articlesObjectReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  commentPages: pagesReducer
})
