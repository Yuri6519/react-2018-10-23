import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import { deleteArticle, loadArticle } from '../../ac'
//import { ifError } from 'assert';
import Loader from '../common/loader'
//import { prototype } from 'stream';
import { articleSelector } from '../../selectors'

class Article extends PureComponent {
  state = {
    error: null
  }
  componentDidCatch(error) {
    this.setState({ error })
  }

  // componentDidUpdate(oldProps) {
  //   // ранее приходила статья
  //   const { isOpen, dispatchLoadArticle, article } = this.props

  //   if (isOpen && !oldProps.isOpen) {
  //     dispatchLoadArticle(article.id)
  //   }
  // }

  componentDidMount() {
    // теперь приходит id
    const { id, article, dispatchLoadArticle } = this.props

    if (!article || (!article.text && !article.loading)) {
      dispatchLoadArticle(id)
    }
  }

  render() {
    const { article, isOpen } = this.props
    const buttonTitle = isOpen ? 'close' : 'open'

    if (!article) return null

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick} className={'test--article__btn'}>
          {buttonTitle}
        </button>
        <button
          onClick={this.handleDelete}
          className={'test--article-delete__btn'}
        >
          Delete me
        </button>

        {this.getRealBody()}
      </div>
    )
  }

  getRealBody = () => {
    const { isOpen, article } = this.props

    if (isOpen && article.loading) return <Loader />

    return (
      <CSSTransition
        transitionName="article"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.body}
      </CSSTransition>
    )
  }

  handleClick = () => {
    //this.props.toggleOpen(this.props.article.id)
  }

  handleDelete = () => {
    this.props.dispatchDeleteArticle(this.props.article.id)
  }

  get body() {
    const { isOpen, article } = this.props

    if (!isOpen) return null

    return (
      <section className={'test--article__body'}>
        {article.text}
        {this.state.error ? null : (
          <CommentList comments={article.comments} articleId={article.id} />
        )}
      </section>
    )
  }
}

Article.propTypes = {
  id: PropTypes.string

  // article: PropTypes.shape({
  //   id: PropTypes.string,
  //   text: PropTypes.string,
  //   comments: PropTypes.array
  // }),
  // isOpen: PropTypes.bool.isRequired,
  // toggleOpen: PropTypes.func.isRequired
}

export default connect(
  (state, ownProps) => ({
    article: articleSelector(state, ownProps)
  }),
  {
    dispatchDeleteArticle: deleteArticle,
    dispatchLoadArticle: loadArticle
  }
)(Article)
