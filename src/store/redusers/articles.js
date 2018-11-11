import { DELETE_ARTICLE } from '../../constants'
import { normalizedArticles } from '../../fixtures'

export default (articleStaste = normalizedArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return articleStaste.filter((article) => article.id !== action.payload)
  } else {
    return articleStaste
  }
}
