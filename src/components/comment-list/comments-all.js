import React, { Component } from 'react'
import Comment from '../comment'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import Loader from '../common/loader'
import { NavLink } from 'react-router-dom'

import {
  commentsSelector,
  commentObjectLoadingSelector,
  commentObjectLoadedSelector
} from '../../selectors'

class CommentsAll extends Component {
  render() {
    return <div>{this.getBody()}</div>
  }

  componentDidMount() {
    const { loaded, loading } = this.props

    !loaded && !loading && this.props.fetchData()
  }

  getBody() {
    const { page, loading, loaded, comments = [] } = this.props

    console.log('all_comm::componentDidMount::page=', page)
    console.log('all_comm::componentDidMount::comments=', comments)

    if (!comments || comments.length === 0) {
      if (loading || !loaded) return <Loader />
      else return null
    }

    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
      </div>
    )
  }

  get comments() {
    const { page } = this.props

    const obj = {
      '1': [0, 4],
      '2': [5, 9],
      '3': [10, 14],
      '4': [15, 15]
    }

    const minInd = obj[page][0]
    const maxInd = obj[page][1]

    return (
      <>
        <ul>
          {this.props.comments
            .filter((_, index) => {
              console.log(index)
              return index >= minInd && index <= maxInd
            })
            .map((commentId) => (
              <li key={commentId} className="test--comment-list__item">
                <Comment id={commentId} />
              </li>
            ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('connect comment-all--list')

  const localComments = commentsSelector(state)

  //console.log('localComments.toJS.Keys',Object.keys(localComments.toJS()))

  //const arr = Object.keys(localComments.toJS());

  //   const obj = {
  //     '1': [0, 4],
  //     '2': [5, 9],
  //     '3': [9, 14],
  //     '4': [15, 16]
  //   }

  //   console.log(obj)

  return {
    comments: Object.keys(localComments.toJS()),
    // objCom: obj,
    loading: commentObjectLoadingSelector(state),
    loaded: commentObjectLoadedSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchData: loadAllComments }
)(CommentsAll)
