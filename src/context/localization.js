import {createContext} from 'react'
import {localLangRUS} from '../components/common/localization'

const {Provider, Consumer} = createContext(localLangRUS)

export {Provider, Consumer}