import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    // Здесь запись {match}  - деструктуризация объекта, который передается при вызове
    return <Article id={match.params.id} isOpen />
    //return <h1>{match.params.id} </h1>
  }
}

export default ArticlesRoute
