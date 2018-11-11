import { SHOW_COMMENTS } from '../../constants'
import { normalizedComments } from '../../fixtures'

export default (comments = [], action) => {
  if (action.type === SHOW_COMMENTS) {
    return normalizedComments.filter((itr) => {
      return action.payload.find((elm) => {
        return elm === itr.id
      })
    })
  } else {
    return comments
  }
}
