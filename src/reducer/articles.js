import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  ASYNC_SUCCESS,
  ASYNC_FAIL,
  ASYNC_START
} from '../constants/index'
//import { normalizedArticles } from '../fixtures'
import { List, Record } from 'immutable'
import ReducerRecord, { defaultArticleMapRec } from './reducer-record'

const ArticleRecord = Record({
  id: null,
  date: null,
  title: null,
  text: null,
  comments: [],
  //--//
  loading: false,
  loaded: false
})

// вместо массива статей будем храниить их идшки
//const articleIds = normalizedArticles.map((article) => article.id)

export default (articleState = new List([]), action) => {
  //console.log('reducer::article::',articleState)

  if (action.type === DELETE_ARTICLE) {
    return articleState.filter((id) => id !== action.payload.id)
  }

  if (action.type === LOAD_ALL_ARTICLES + ASYNC_SUCCESS) {
    return new List(action.response.map((article) => article.id))
  }

  return articleState
}

// добавим в стор объект с артиклами
//export const articlesObjectReducer = (state = defaultArticleMapRec([], ArticleRecord), action) => {
export const articlesObjectReducer = (state = new ReducerRecord(), action) => {
  if (action.type === ADD_COMMENT) {
    // добавим ИД коммента в массив комментов артикла
    return state.updateIn(
      ['entities', action.payload.articleId, 'comments'],
      (comments) => {
        return comments
          ? comments.concat(action.payload.comment.id)
          : [action.payload.comment.id]
      }
    )
  }

  // console.log('articlesObjectReducer::action.type', action.type)
  // console.log('articlesObjectReducer::action.response', action.response)

  if (action.type === LOAD_ALL_ARTICLES + ASYNC_START) {
    return state.set('loading', true)
  }

  if (action.type === LOAD_ALL_ARTICLES + ASYNC_SUCCESS) {
    return state
      .update('entities', (entities) => defaultArticleMapRec(action.response, ArticleRecord).merge(entities))
      .set('loading', false)
      .set('loaded', true)
  }

  if (action.type === LOAD_ALL_ARTICLES + ASYNC_FAIL) {
    return state.set('error', action.error)
  }

  // LOAD ARTICLE

  if (action.type === LOAD_ARTICLE + ASYNC_START) {
    const articleId = action.payload.id

    return state.updateIn(['entities', articleId, 'loading'], () => {
      return true
    })
  }

  if (action.type === LOAD_ARTICLE + ASYNC_SUCCESS) {
    const articleId = action.payload.id

    return state
      // .updateIn(['entities', articleId, 'text'], () => {
      //   return action.payload.text
      // })
      .setIn(['entities', articleId], new ArticleRecord(action.payload))
      .updateIn(['entities', articleId, 'loading'], () => {
        return false
      })
      .updateIn(['entities', articleId, 'loaded'], () => {
        return true
      })
  }

  return state
}
