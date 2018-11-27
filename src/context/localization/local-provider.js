import React, { Component } from 'react'
import { LOCAL_LANG_RUS } from '../../constants'
import languageObject from './local_spr'
import { Provider } from './local_context'

export default class LanguageProvider extends Component {
  render() {
    const { lang } = this.props
    const objForLocalLang =
      lang === LOCAL_LANG_RUS ? languageObject.ru : languageObject.en

    // console.log('LanguageProvider::render::lang', lang)
    // console.log('LanguageProvider::render::lang', objForLocalLang)

    return (
      <Provider value={objForLocalLang}>
        <div>{this.props.children}</div>
      </Provider>
    )
  }
}
