import React, { Component } from 'react'
import Article from '../article'
import accordion from '../../decorators/accordion'
import { connect } from 'react-redux'

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
  let arr = store.articles.filter((el) => {
    return (
      store.selectedOption.find((elem) => {
        return elem.value === el.id
      }) || store.selectedOption.length === 0
    )
  })

  return { articles: arr }
}

export default connect(mapStateToProps)(accordion(ArticleList))
