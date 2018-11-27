import React, { Component } from 'react'
//import ArticleList from './article-list'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
//import { AllComments } from '../components/comment-list'
import CommentsRoot from '../routes/comments-root'
import Menu, { MenuItem } from '../components/menu'
import { Provider as AuthProvider } from '../context/auth'
import { languageContect } from '../context/localization'
import { languageObject } from '../context/localization'
import { LOCAL_LANG_RUS } from '../constants'

export default class App extends Component {
  state = {
    userName: '',
    lang: LOCAL_LANG_RUS
  }

  handleUserChange = (userName) => {
    this.setState({ userName })
  }

  toggleLanguage = (lang) => {
    this.setState({ lang })
  }

  render() {
    const objForLocalLang =
      this.state.lang === LOCAL_LANG_RUS ? languageObject.ru : languageObject.en

    const LanguageProvider = languageContect.Provider

    return (
      <LanguageProvider value={objForLocalLang}>
        <div>
          <UserForm
            onChange={this.handleUserChange}
            value={this.state.userName}
            onButtonClick={this.toggleLanguage}
            currentLang={this.state.lang}
          />
          <div>
            <Menu>
              <MenuItem to="/counter" name="menuCounter">
                Counter
              </MenuItem>
              <MenuItem to="/filters" name="menuFilters">
                Filters
              </MenuItem>
              <MenuItem to="/articles" name="menuArticles">
                Articles
              </MenuItem>
              <MenuItem to="/comments" name="menuComments">
                Comments
              </MenuItem>
            </Menu>
          </div>

          <Switch>
            <Route path="/counter" exact component={Counter} />
            <Route path="/filters" component={Filters} />
            {/* <Route path="/articles" component={Filters} />  */}
            {/* для показа и статей и фильтра*/}
            <Route path="/articles/new" render={() => <h2>New article</h2>} />

            <Route path="/comments" component={CommentsRoot} />
            <Route path="/error" render={() => <h2>Ошибка</h2>} />

            <AuthProvider
              value={{
                userNameFromContext: this.state.userName
              }}
            >
              <Route path="/articles" component={ArticlesRoute} />
            </AuthProvider>
          </Switch>
        </div>
      </LanguageProvider>
    )
  }
}
