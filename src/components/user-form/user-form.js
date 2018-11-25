import React, { Component } from 'react'
import {Consumer as LanguageConsumer} from '../../context/localization'
import {LOCAL_LANG_RUS, LOCAL_LANG_ENG} from '../../constants'


export default class UserForm extends Component {
  // state = {
  //   username: ''
  // }

  render() {
    return (
      <form>
        <LanguageConsumer>
          {(value) => value.userName}
        </LanguageConsumer>
        
        <input
          // value={this.state.username}
          value={this.props.value}
          onChange={this.handleUserNameInput}
        />

        <button onClick={this.handleButtonClick}>
        <LanguageConsumer>
          {(value) => value.chngeLng}
        </LanguageConsumer>

        </button>

      </form>
    )
  }

  handleButtonClick = (evt) => {
    evt.preventDefault();

    const {currentLang} = this.props
    const newLang = currentLang === LOCAL_LANG_RUS ? LOCAL_LANG_ENG : LOCAL_LANG_RUS

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
