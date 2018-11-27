import React from 'react'
import { languageContect } from '../../../context/localization'

const Loader = () => {
  const LanguageConsumer = languageContect.Consumer

  return (
    <h3>
      <LanguageConsumer>{(value) => value.loaderTitle}</LanguageConsumer>
    </h3>
  )
}

export default Loader
