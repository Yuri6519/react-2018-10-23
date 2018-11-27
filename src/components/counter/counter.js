import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
import { languageContect } from '../../context/localization'

class Counter extends Component {
  render() {
    const LanguageConsumer = languageContect.Consumer

    console.log('Counter')
    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.handleClick}>
          <LanguageConsumer>
            {(value) => value.counterButtonTitle}
          </LanguageConsumer>
        </button>
      </div>
    )
  }
  handleClick = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  countProp: state.count
})
const mapDispatchToProps = {
  increment: incrementActionCreator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
