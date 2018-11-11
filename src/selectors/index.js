import { createSelector } from 'reselect'

// article
export const articleSelector = (store) => store.articles
export const selectedOptionSelector = (store) => store.selectedOption

// comment
export const commentsSelector = (store) => store.comments_via_comm
export const idCommentSelector = (_, props) => props.id

export const filterArticleSelector = createSelector(
  articleSelector,
  selectedOptionSelector,
  (articles, selectedOption) => {
    return articles.filter((el) => {
      return (
        selectedOption.find((elem) => {
          return elem.value === el.id
        }) || selectedOption.length === 0
      )
    })
  }
)

// здесь мемоизируется только одинкоммент - нужна фабрика
// export const commentSelector = createSelector(
//   commentsSelector,
//   idCommentSelector,
//   (comments, id) => {
//     console.log('commentSelector',id)
//     return  comments.find(itr => itr.id === id)
//   }
// )

// фабрика
export const createCommentSelector = () => {
  return createSelector(commentsSelector, idCommentSelector, (comments, id) => {
    //console.log('commentSelector',id)
    //return  comments.find(itr => itr.id === id)
    return comments[id]
  })
}
