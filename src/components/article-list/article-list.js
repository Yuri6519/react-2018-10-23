import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  filteredArticleSelector,
  articlesObjectLoadingSelector,
  articlesObjectLoadedSelector
} from '../../selectors'

//import Article from '../article'
import accordion from '../../decorators/accordion'
import { loadAllArticles } from '../../ac'
import Loader from '../common/loader'
import { NavLink } from 'react-router-dom'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentDidMount() {
    // https://metanit.com/web/react/2.6.php
    // Здесь можно выполнять запросы к удаленным ресурсам
    // вызов загрузчика статей
    !this.props.loaded && this.props.fetchData && this.props.fetchData()
  }

  render() {
    console.log('render articles-list')

    return this.props.loading ? <Loader /> : <ul>{this.items}</ul>
  }

  get items() {
    return this.props.articles.map((item) => (
      <li key={item.id} className={'test--article-list_item'}>
        <NavLink to={`/articles/${item.id}`} activeStyle={{ color: 'red' }}>
          {item.title}
        </NavLink>

        {/* <Article
          article={item}
          isOpen={this.props.openItemId === item.id}
          toggleOpen={this.props.toggleOpenItem}
        /> */}
      </li>
    ))
  }
}

const mapStateToProps = (state) => {
  console.log('connect articles-list')
  return {
    articles: filteredArticleSelector(state),
    loading: articlesObjectLoadingSelector(state),
    loaded: articlesObjectLoadedSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchData: loadAllArticles }
)(accordion(ArticleList))
