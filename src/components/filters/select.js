import Select from 'react-select'
import React, { Component } from 'react'
import articles from '../../fixtures'

class SelectFilter extends Component {
  state = {
    selectedOption: null
  }

  render() {
    return (
      <div>
        <Select
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.state.selectedOption}
          isMulti={true}
        />
      </div>
    )
  }

  get optionsForSelect() {
    return articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
  }
}

export default SelectFilter
