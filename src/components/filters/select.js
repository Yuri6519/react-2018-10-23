import Select from 'react-select'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

class SelectFilter extends Component {
  // state = {
  //   selectedOption: null
  // }

  render() {
    return (
      <div>
        <Select
          options={this.optionsForSelect}
          onChange={this.handleSelectChange}
          value={this.props.selectedOption}
          isMulti
        />
      </div>
    )
  }

  get optionsForSelect() {
    return this.props.articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.props.dispatchFilterArticle(selectedOption)
  }
}

const mapStateToProps = (store) => ({
  selectedOption: store.selectedOption,
  articles: store.articles
})

const setDispatchFilterArticle = {
  dispatchFilterArticle: filterArticle
}

export default connect(
  mapStateToProps,
  setDispatchFilterArticle
)(SelectFilter)
