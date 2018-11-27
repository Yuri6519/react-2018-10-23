import { createContext } from 'react'

const { Provider, Consumer } = createContext({
  userNameFromContext: 'default user name',
  foo: 456
})

export { Provider, Consumer }
