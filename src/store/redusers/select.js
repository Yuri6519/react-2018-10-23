import { FILTER_ARTICLE } from '../../constants'

export default (selectedOption = [], action) => {
  if (action.type === FILTER_ARTICLE) {
    return action.payload
  } else {
    return selectedOption
  }
}
