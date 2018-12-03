import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, Switch } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsRoot from '../routes/comments-root'
import Menu, { MenuItem } from '../components/menu'
import { Provider as AuthProvider } from '../context/auth'
import { LOCAL_LANG_RUS } from '../constants'
import {VirtList, VirtGrid} from '../components/vitrualized'

import { LanguageProviderObject } from '../context/localization'

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
    return (
      <LanguageProviderObject lang={this.state.lang}>
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
              <MenuItem to="/virtlist" name="menuVirtList">
                Virtual List
              </MenuItem>
              <MenuItem to="/virtgrid" name="menuVirtGrid">
                Virtual Grid
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

            <Route path="/virtlist" component={VirtList} />
            <Route path="/virtgrid" component={VirtGrid} />

            <AuthProvider
              value={{
                userNameFromContext: this.state.userName
              }}
            >
              <Route path="/articles" component={ArticlesRoute} />
            </AuthProvider>

          </Switch>
        </div>
      </LanguageProviderObject>
    )
  }
}
