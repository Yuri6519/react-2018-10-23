import React, { Component } from 'react'
import Comment from '../comment'
import { connect } from 'react-redux'

import {
  commentsSelector,
  pageCommentSelector
} from '../../selectors'

class CommentsAll extends Component {
  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    const { comments = [] } = this.props

    // console.log('all_comm::componentDidMount::page=', page)
    // console.log('all_comm::componentDidMount::comments=', comments)

    if (!comments || comments.length === 0) {
      return null
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
    const { page, pages, comment_total } = this.props

    const obj = pages.get(parseInt(page,10))

    if (!obj) return null

    const minInd = obj.min
    const maxInd = obj.max > comment_total ? comment_total : obj.max 

    return (
      <>
        <ul> 
          комментарии с {minInd+1} по {maxInd === comment_total ? comment_total : maxInd+1}
          {this.props.comments
            .filter((_, index) => {
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
  const comment_total = Object.keys(localComments.toJS()).length

  return {
    comments: Object.keys(localComments.toJS()),
    pages: pageCommentSelector(state),
    comment_total: comment_total
  }
}

export default connect(
  mapStateToProps
)(CommentsAll)
