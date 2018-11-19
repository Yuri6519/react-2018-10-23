export default (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)
  next(action)
  console.log('after', store.getState())
}

export const generateIdMw = (store) => (next) => (action) => {
  const getId = function() {
    return Math.random()
      .toString(36)
      .substr(2, 17)
  }

  // if (action.type === ADD_COMMENT) {
  if (action.isAddComment) {
    action.payload.comment.id = getId()
  }

  next(action)
}
