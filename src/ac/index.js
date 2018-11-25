import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ALL_COMMENTS,
  LOAD_ARTICLE,
  SHOW_COMMENT_PAGES,
  ASYNC_SUCCESS,
  ASYNC_START,
  ASYNC_FAIL
} from '../constants'

import {push, replace} from 'connected-react-router'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: { id: articleId }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
    isAddComment: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticle(id) {
  // через mw
  // return {
  //   type: LOAD_ARTICLE,
  //   callAPI: `/api/article/${articleId}`
  // }

  // через redux-thunk
  return function(dispatch) {
    dispatch({
      type: LOAD_ARTICLE + ASYNC_START,
      payload: { id }
    })

    fetch(`/api/article/${id}`)
      .then((res) => {
        if(res.status >= 400){
          throw new Error(res.status + '.' + res.statusText)
        }
        return res.json()
      })
      .then((response) => {
        dispatch({
          type: LOAD_ARTICLE + ASYNC_SUCCESS,
          payload: response
        })
      })
      .catch((err) => {

console.log('catch::err::', err)

        dispatch(replace('/error'))

        // этор уже не надо
        dispatch({
          type: LOAD_ARTICLE + ASYNC_FAIL,
          payload: { id },
          error: err
        })
      }
      )
  }
}

export function loadAllComments() {
  return {
    type: LOAD_ALL_COMMENTS,
    callAPI: '/api/comment'
  }
}

export function showLoadPages(comment_total){
  return {
    type: SHOW_COMMENT_PAGES,
    payload: {comment_total}
  }
}
