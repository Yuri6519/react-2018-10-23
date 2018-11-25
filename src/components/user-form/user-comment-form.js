import React, { Component } from 'react'
import { addComment } from '../../ac'
import { connect } from 'react-redux'
import {Consumer as LocalConsumer} from '../../context/localization'

class UserComment extends Component {
  render() {
    return (
      <form>
        <div><LocalConsumer>{(value)=>value.commentAddTitle}</LocalConsumer></div>
        <div>
          <section>
            <LocalConsumer>{(value)=>value.commentAddUser}</LocalConsumer>
            <input
              id="inputUser"
              required={true}
              minLength={2}
              maxLength={100}
            />
            <button onClick={this.handleClick}>
            <LocalConsumer>{(value)=>value.commentButtonAddTitle}</LocalConsumer>
            </button>
          </section>
          <section>
          <LocalConsumer>{
            (value) =>
              <textarea
                id="textComment"
                rows="4"
                cols="100"
                name="comment"
                placeholder={value.commentTextAreaPlaceHolder}
                required={true}
              />
          }
          </LocalConsumer>
          </section>
        </div>
      </form>
    )
  }

  handleClick = (evt) => {
    const nameObj = document.querySelector('#inputUser')
    const name = nameObj.value
    const nameMinValue = nameObj.minLength
    const nameMaxValue = nameObj.maxLength

    const text = document.querySelector('#textComment').value

    if (name.length >= nameMinValue && name.length <= nameMaxValue && text) {
      evt.preventDefault()

      this.props.dispatchCommentAction({
        articleId: this.props.articleId,
        comment: {
          id: '',
          user: name,
          text: text
        }
      })
    }
  }
}

export const UserCommentForm = connect(
  null,
  { dispatchCommentAction: addComment }
)(UserComment)
