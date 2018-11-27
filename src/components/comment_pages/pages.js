import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showLoadPages } from '../../ac'
import { COMMENT_PAGES_COUNT } from '../../constants'
import { languageContect } from '../../context/localization'

import { commentsSelector, pageCommentSelector } from '../../selectors'

class Pages extends Component {
  render() {
    return <div>{this.Body}</div>
  }

  componentDidMount() {
    this.setPages()
  }

  setPages() {
    const { pages, comment_total } = this.props

    const pageCount = Object.keys(pages.toJS()).length
    const pagesTotal = Math.ceil(comment_total / COMMENT_PAGES_COUNT)

    // console.log('Pages::setPages::pages', pages)
    // console.log('Pages::setPages::comment_total', comment_total)
    // console.log('Pages::setPages::=pageCount', pageCount)
    // console.log('Pages::setPages::=pagesTotal', pagesTotal)

    if (pageCount !== pagesTotal) {
      this.props.setCommentPages(comment_total)
    }
  }

  get Body() {
    const { comment_total } = this.props
    const LanguageConsumer = languageContect.Consumer
    return (
      <div>
        <p>
          <LanguageConsumer>
            {(value) => value.pageTotalCommentsTitle}
          </LanguageConsumer>{' '}
          {comment_total}
        </p>
        {this.getLinks()}
      </div>
    )
  }

  getLinks() {
    const { pages } = this.props
    const LanguageConsumer = languageContect.Consumer
    return Object.keys(pages.toJS()).map((itr) => {
      return (
        <NavLink
          to={`/comments/${itr}`}
          activeStyle={{ color: 'red' }}
          key={itr}
        >
          <h4>
            <LanguageConsumer>{(value) => value.pageTitle}</LanguageConsumer>{' '}
            {itr}
          </h4>
        </NavLink>
      )
    })
  }
}

const mapStateToProps = (state) => {
  const localComments = commentsSelector(state)
  const comment_total = Object.keys(localComments.toJS()).length

  return {
    comment_total: comment_total,
    pages: pageCommentSelector(state)
  }
}

export default connect(
  mapStateToProps,
  {
    setCommentPages: showLoadPages
  }
)(Pages)
