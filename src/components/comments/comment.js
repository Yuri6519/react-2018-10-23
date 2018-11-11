import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../../selectors'

class ArticleComment extends Component {
  static propTypes = {
    id: PropTypes.string,
    item: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }
  render() {
    const { item } = this.props

    if (item === undefined) {
      return null
    }

    return (
      <div>
        <section className="test-comment-list-item">
          <h4>{item.user}</h4>
          <h5>{item.text}</h5>
        </section>
      </div>
    )
  }
}

// так фаборика не работает - mapStateToProps создается одна для всех
// const mapStateToProps = (store, parentProps) => {

//   return {
//     item: commentSelector(store, parentProps)
//   }
// }

const initMapStateToProps = () => {
  // замыкание
  const commentSelector = createCommentSelector()

  return (store, parentProps) => ({ item: commentSelector(store, parentProps) })
}

export default connect(initMapStateToProps)(ArticleComment)
