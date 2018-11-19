import { ASYNC_START, ASYNC_SUCCESS, ASYNC_FAIL } from '../constants'

export default (store) => (next) => (action) => {
  const { callAPI, ...rest } = action

  if (!callAPI) return next(action)

  next({ ...action, type: action.type + ASYNC_START })

  fetch(callAPI)
    .then((res) => res.json())
    .then((response) => {
      next({
        ...rest,
        response,
        type: action.type + ASYNC_SUCCESS
      })
    })
    .catch((error) => {
      next({
        ...rest,
        error,
        type: action.type + ASYNC_FAIL
      })
    })
}
