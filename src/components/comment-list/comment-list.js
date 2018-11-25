import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpenItem from '../../decorators/toggleOpen'
import { UserCommentForm } from '../user-form'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import Loader from '../common/loader'
import {Consumer as AuthConsumer} from '../../context/auth'
import {Consumer as LocalConsumer} from '../../context/localization'

import {
  commentObjectLoadingSelector,
  commentObjectLoadedSelector
} from '../../selectors'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  componentDidUpdate() {
    const { isOpen, loaded, loading } = this.props

    isOpen && (!loaded && !loading) && this.props.fetchData()
  }

  render() {

//console.log('comment-list::render::HEREHEREHERE')


    return (
      <div>
        {this.getButton()}
        {this.getCommentsBody()}
      </div>
    )
  }

  getCommentsBody() {
    const { isOpen, articleId, loading, loaded } = this.props

    if (!isOpen) return null

    //console.log('render comment-list', loading)
    //console.log('render comment-list', loaded)
    //console.log('render comment-list::AuthConsumer', AuthConsumer.value)

    if (loading || !loaded) return <Loader />

    //return <div>STUB...</div>

    return (
      <>
        <AuthConsumer>
          {(value) => {

//console.log('comment-list::AuthConsumer::value', value)


          return <h2>{value.userNameFromContext}</h2>}
          }
        </AuthConsumer>
        <UserCommentForm articleId={articleId} />

        <CSSTransition
          transitionName="comments" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </>
    )
  }

  getTextForCommentButton({commentButtonTitleShow, commentButtonTitleHide}){
    const { isOpen } = this.props
    return isOpen ? commentButtonTitleHide : commentButtonTitleShow
  }

  getButton() {
    const { toggleOpenItem } = this.props
    return (
      <button onClick={toggleOpenItem} className="test--comment-list__btn">
      <LocalConsumer>
        {(value)=>this.getTextForCommentButton(value)}
      </LocalConsumer>
      </button>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null
    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">
            <LocalConsumer>
              {(value)=>value.commentNoCommentText}
            </LocalConsumer>
          </h3>
        )}
      </div>
    )
  }
  get comments() {
    return (
      <ul>
        {this.props.comments.map((commentId) => (
          <li key={commentId} className="test--comment-list__item">
            <Comment id={commentId} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('connect comment-list')
  return {
    loading: commentObjectLoadingSelector(state),
    loaded: commentObjectLoadedSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchData: loadAllComments }
)(toggleOpenItem(CommentList))
