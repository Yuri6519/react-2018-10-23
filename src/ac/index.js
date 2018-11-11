import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE } from '../constants'

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
  console.log('creater::filterArticle', selectedOption)

  return {
    type: FILTER_ARTICLE,
    payload: selectedOption
  }
}
