import React, { Component } from 'react'
import { addComment } from '../../ac'
import { connect } from 'react-redux'
import { languageContect } from '../../context/localization'

class UserComment extends Component {
  render() {
    const LanguageConsumer = languageContect.Consumer

    return (
      <form>
        <div>
          <LanguageConsumer>
            {(value) => value.commentAddTitle}
          </LanguageConsumer>
        </div>
        <div>
          <section>
            <LanguageConsumer>
              {(value) => value.commentAddUser}
            </LanguageConsumer>
            <input
              id="inputUser"
              required={true}
              minLength={2}
              maxLength={100}
            />
            <button onClick={this.handleClick}>
              <LanguageConsumer>
                {(value) => value.commentButtonAddTitle}
              </LanguageConsumer>
            </button>
          </section>
          <section>
            <LanguageConsumer>
              {(value) => (
                <textarea
                  id="textComment"
                  rows="4"
                  cols="100"
                  name="comment"
                  placeholder={value.commentTextAreaPlaceHolder}
                  required={true}
                />
              )}
            </LanguageConsumer>
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
