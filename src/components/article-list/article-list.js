import React, { Component } from 'react'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { connect } from 'react-redux'
import { filterArticleSelector } from '../../selectors'

export class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles.map((item) => (
      <li key={item.id} className={'test-article-list-item'}>
        <Article
          article={item}
          isOpen={this.props.openItemId === item.id && this.props.doOpen}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

const mapStateToProps = (store) => {
  return { articles: filterArticleSelector(store) }
}

export default connect(mapStateToProps)(accordion(ArticleList))
