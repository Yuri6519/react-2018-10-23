import React, { Component } from 'react'
import DayPicker from './day-picker'
import Select from './select'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <DayPicker />
        <Select />
      </div>
    )
  }
}
