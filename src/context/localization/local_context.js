import { createContext } from 'react'
import { localLangRUS } from './local_spr'

const { Provider, Consumer } = createContext(localLangRUS)

export default { Provider, Consumer }
