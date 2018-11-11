import React, { Component } from 'react'
import { connect } from 'react-redux'
//import {INCREMENT} from '../../constants'
import { incrementActionCreator } from '../../ac'

class Counter extends Component {
  render() {
    console.log('counter.render')

    return (
      <div>
        <h1>{this.props.countProp}</h1>
        <button onClick={this.onClick}>Increase></button>
      </div>
    )
  }

  // это вызов без Action Create
  // onClick = () => {
  //     this.props.dispatch({
  //         type: INCREMENT
  //     })
  // }

  // это вызов с Action Create
  onClick = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  countProp: state.count
})

// это вызов без Action Create
//export default connect(mapStateToProps)(Counter);

// это вызов с Action Create
const mapDispatchToProps = {
  increment: incrementActionCreator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
