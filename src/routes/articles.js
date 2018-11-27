import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'
import { languageContect } from '../context/localization'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        {/* <Route
          path="/articles/"
          exact
          render={() => (
            <div>
              <p>Выберите статью</p>{' '}
            </div>
          )}
        /> */}

        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    // Здесь запись {match}  - деструктуризация объекта, который передается при вызове
    const LanguageConsumer = languageContect.Consumer
    return match ? (
      <Article id={match.params.id} isOpen key={match.params.id} />
    ) : (
      <div>
        <h2>
          <LanguageConsumer>{(value) => value.articleChoose}</LanguageConsumer>
        </h2>{' '}
      </div>
    )

    //return <Article id={match.params.id} isOpen key={match.params.id} />
    //return <h1>{match.params.id} </h1>
  }
}

export default ArticlesRoute
