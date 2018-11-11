import { INCREMENT } from '../../constants'

export default (count = 0, action) => {
  console.log(action.payload)

  return action.type === INCREMENT ? count + 1 : count
}
