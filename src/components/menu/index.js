import React, { Component } from 'react'
import MenuItem from './menu-item'
import { LanguageConsumerObject } from '../../context/localization'

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.getTranslatedValue('mainMenu')}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default LanguageConsumerObject(Menu)
export { MenuItem }
