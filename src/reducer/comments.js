import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = new Map(defaultComment), action) => {
  // нельзя менять объект - возвращаем новый
  if (action.type === ADD_COMMENT) {
    return commentState.set(action.payload.comment.id, action.payload.comment)
  }

  return commentState
}
