import { normalizedComments } from '../fixtures'
import {
  ADD_COMMENT,
  LOAD_ALL_COMMENTS,
  ASYNC_START,
  ASYNC_SUCCESS,
  ASYNC_FAIL
} from '../constants'
import { Map, Record } from 'immutable'
import ReducerRecord, { defaultArticleMapRec } from './reducer-record'
import { endianness } from 'os'

// const defaultComment = normalizedComments.reduce((acc, comment) => {
//   acc[comment.id] = comment
//   return acc
// }, {})

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

//export default (commentState = new Map(defaultComment), action) => {
export default (commentState = new ReducerRecord(), action) => {
  // нельзя менять объект - возвращаем новый
  // if (action.type === ADD_COMMENT) {
  //   const retObj = commentState
  //     .updateIn(['entities'], (entities) => {
  //       return (entities.set(action.payload.comment.id, action.payload.comment))
  //     })
  //     //.set(action.payload.comment.id, action.payload.comment)

  //     console.log('commentReducer::',retObj)

  //     return retObj

  // }

  switch (action.type) {
    case LOAD_ALL_COMMENTS + ASYNC_START:
      return commentState.set('loading', true)

    case LOAD_ALL_COMMENTS + ASYNC_SUCCESS:
      return commentState
        .set(
          'entities',
          defaultArticleMapRec(action.response.records, CommentRecord)
        )
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_COMMENTS + ASYNC_FAIL:
      return commentState.set('error', action.error)

    case ADD_COMMENT: {
      console.log('commentReducer::ADD_COMMENT::action', action)
      console.log('commentReducer::ADD_COMMENT::commentState', commentState)

      return commentState.updateIn(['entities'], (entities) => {
        return entities.set(action.payload.comment.id, action.payload.comment)
      })
    }

    default:
      return commentState
  }
}
