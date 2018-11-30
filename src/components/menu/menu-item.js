import React from 'react'
import { NavLink } from 'react-router-dom'
import { LanguageConsumerObject } from '../../context/localization'

function MenuItem({ children, name, getTranslatedValue, ...rest }) {
  return (
    <div>
      <NavLink {...rest} activeStyle={{ color: 'red' }}>
        {getTranslatedValue(name)}
      </NavLink>
    </div>
  )
}
export default LanguageConsumerObject(MenuItem)
