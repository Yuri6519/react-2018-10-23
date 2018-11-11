import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLE,
  SHOW_COMMENTS
} from '../constants'

export function incrementActionCreator() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: articleId
  }
}

export function filterArticle(selectedOption) {
  return {
    type: FILTER_ARTICLE,
    payload: selectedOption
  }
}

export function showComments(comments) {
  //console.log('showComments',comments)

  return {
    type: SHOW_COMMENTS,
    payload: comments
  }
}
