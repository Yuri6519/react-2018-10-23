import React, { Component } from 'react'
//import ArticleList from './article-list'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <div>
          <div>
            <NavLink
              to="/counter"
              activeStyle={{ color: 'red' }}
              activeClassName="myClass"
            >
              Counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              Filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              Articles
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" exact component={Counter} />
          <Route path="/filters" component={Filters} />
          {/* <Route path="/articles" component={Filters} /> */
          /* для показа и статей и фильтра */}
          <Route path="/articles/new" render={() => <h2>New article</h2>} />
          <Route path="/articles" component={ArticlesRoute} />
        </Switch>
      </div>
    )
  }
}
