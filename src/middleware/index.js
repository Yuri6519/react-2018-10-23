import { INCREMENT } from '../constants'

export default (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch', action)

  const getId = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random()
      .toString(36)
      .substr(2, 17)
  }

  if (action.type === INCREMENT) {
    action.payload = getId()
  }

  next(action)

  console.log('after', store.getState())
}
