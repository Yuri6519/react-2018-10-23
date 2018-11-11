import { SHOW_COMMENTS } from '../../constants'
import { normalizedComments } from '../../fixtures'

// моя реализация
export default (comments = [], action) => {
  if (action.type === SHOW_COMMENTS) {
    let arr = normalizedComments.filter((itr) => {
      return action.payload.find((elm) => {
        return elm === itr.id
      })
    })

    // console.log('reduser::SHOW_COMMENTS::payload',action.payload)
    // console.log('reduser::SHOW_COMMENTS::arr',arr)

    return arr
  } else {
    return comments
  }
}

// акумулятор для создания объекта комментариев, что бы не массив был (изначально, а объект)
const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

// через comment, как на лекции
export const reducerViaCommentComp = (
  comments_via_comm = defaultComment,
  action
) => {
  return comments_via_comm
}
