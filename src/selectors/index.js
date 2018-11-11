import { createSelector } from 'reselect'

export const articleSelector = (store) => store.articles
export const selectedOptionSelector = (store) => store.selectedOption

export const filterArticleSelector = createSelector(
  articleSelector,
  selectedOptionSelector,
  (articles, selectedOption) => {
    console.log('article-list.filterArticleSelector')

    return articles.filter((el) => {
      return (
        selectedOption.find((elem) => {
          return elem.value === el.id
        }) || selectedOption.length === 0
      )
    })
  }
)
