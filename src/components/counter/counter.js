import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
import {Consumer as LocalConsumer} from '../../context/localization'

class Counter extends Component {
  render() {
    console.log('Counter')
    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.handleClick}>
          <LocalConsumer>{(value)=>value.counterButtonTitle}</LocalConsumer>
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
