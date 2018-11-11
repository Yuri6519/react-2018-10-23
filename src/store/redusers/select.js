import { FILTER_ARTICLE } from '../../constants'

export default (selectedOption = [], action) => {
  console.log('reducer::filterArticle', selectedOption)
  console.log('reducer::filterArticle::action.type', action.type)

  if (action.type === FILTER_ARTICLE) {
    return action.payload
  } else {
    return selectedOption
  }
}
