import React, { Component } from 'react'
import MenuItem from './menu-item'
import { languageContect } from '../../context/localization'

class Menu extends Component {
  render() {
    const LanguageConsumer = languageContect.Consumer

    return (
      <div>
        <h2>
          <LanguageConsumer>{(value) => value.mainMenu}</LanguageConsumer>
        </h2>
        {this.props.children}
      </div>
    )
  }
}

export default Menu
export { MenuItem }
