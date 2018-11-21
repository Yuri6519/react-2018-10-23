import React, { Component } from 'react'
import { AllComments } from '../components/comment-list'
import { Route } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import Pages from '../components/comment_pages'
import { connect } from 'react-redux'
import { loadAllComments } from '../ac'
import Loader from '../components/common/loader'


import {
  commentsSelector,
  commentObjectLoadingSelector,
  commentObjectLoadedSelector
} from '../selectors'


class CommentsRoot extends Component {

  componentDidMount(){
    //console.log('CommentsRoot::componentDidMount')

    const { loaded, loading } = this.props

    !loaded && !loading && this.props.fetchData()

  }

  render() {
    return (
      <div>
        {this.getPages()}

        {/* <Route path="/comments" exact render={() => <AllComments page="1"/>} /> */}
        <Route path="/comments/:page" render={this.getComments} />
      </div>
    )
  }

  getPages(){
    const { loading, loaded, comment_total } = this.props

     console.log('Pages::render::Body::comment_total=', comment_total)

    if (!comment_total || comment_total === 0) {
      if (loading || !loaded) return <Loader />
      else return null
    }

    return <Pages />

  }

  getComments = ({ match }) => {
    // Здесь запись {match}  - деструктуризация объекта, который передается при вызове

    console.log('getComments::match', match)

    return <AllComments page={match.params.page} />
  }

}

const mapStateToProps = (state) => {
  const localComments = commentsSelector(state)
  const comment_total = Object.keys(localComments.toJS()).length

  return {
      comment_total: comment_total,
      loading: commentObjectLoadingSelector(state),
      loaded: commentObjectLoadedSelector(state),
  }
}

export default connect(
  mapStateToProps,
  { 
      fetchData: loadAllComments,
   }
)(CommentsRoot)