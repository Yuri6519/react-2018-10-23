import React, { Component } from 'react'
import { AllComments } from '../components/comment-list'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class CommentsRoot extends Component {
  render() {
    return (
      <div>
        {this.getLinks()}

        {/* <Route path="/comments" exact render={() => <AllComments page="1"/>} /> */}
        <Route path="/comments/:page" render={this.getComments} />
      </div>
    )
  }

  getLinks() {
    const pages = [1, 2, 3, 4]

    return pages.map((itr) => {
      return (
        <NavLink
          to={`/comments/${itr}`}
          activeStyle={{ color: 'red' }}
          key={itr}
        >
          <h3>Page {itr}</h3>
        </NavLink>
      )
    })
  }

  getComments = ({ match }) => {
    // Здесь запись {match}  - деструктуризация объекта, который передается при вызове

    console.log('getComments::match', match)

    return <AllComments page={match.params.page} />
  }
}

export default CommentsRoot
