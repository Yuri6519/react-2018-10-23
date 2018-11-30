import React, { Component } from 'react'
import { LOCAL_LANG_RUS, LOCAL_LANG_ENG } from '../../constants'
import { LanguageConsumerObject } from '../../context/localization'

class UserForm extends Component {
  // state = {
  //   username: ''
  // }

  render() {
    // const LanguageConsumer = languageContect.Consumer

    return (
      <form>
        {this.props.getTranslatedValue('userName')}

        <input
          // value={this.state.username}
          value={this.props.value}
          onChange={this.handleUserNameInput}
        />

        <button onClick={this.handleButtonClick}>
          {this.props.getTranslatedValue('chngeLng')}
        </button>
      </form>
    )
  }

  handleButtonClick = (evt) => {
    evt.preventDefault()

    const { currentLang } = this.props
    const newLang =
      currentLang === LOCAL_LANG_RUS ? LOCAL_LANG_ENG : LOCAL_LANG_RUS

    this.props.onButtonClick(newLang)
  }

  handleUserNameInput = (event) => {
    this.props.onChange(event.target.value)

    // if (event.target.value.length > 10) {
    //   return this.setState({
    //     username: ''
    //   })
    // }

    // this.setState({
    //   username: event.target.value
    // })
  }
}

export default LanguageConsumerObject(UserForm)
