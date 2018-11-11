import { DELETE_ARTICLE } from '../../constants'
import articles from '../../fixtures'

export default (articleStaste = articles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return articleStaste.filter((article) => article.id !== action.payload)
  } else {
    return articleStaste
  }
}
