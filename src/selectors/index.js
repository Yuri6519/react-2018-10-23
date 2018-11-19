import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters

export const articlesSelector = (state) => state.articles
export const articlesObjectLoadingSelector = (state) =>
  state.articleObject.loading
export const articlesObjectLoadedSelector = (state) =>
  state.articleObject.loaded
export const articlesObjectSelector = (state) => state.articleObject.entities

export const commentsSelector = (state) => state.comments.entities
export const commentObjectLoadingSelector = (state) => state.comments.loading
export const commentObjectLoadedSelector = (state) => state.comments.loaded

export const idSelector = (_, props) => props.id

export const createCommentSelector = () => {
  return createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments.get(id)
  })
}

export const filteredArticleSelector = createSelector(
  filtersSelector,
  articlesSelector,
  articlesObjectSelector,
  (filters, articlesIds, articleObject) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('selector articles-list')

    return articlesIds
      .filter((articleId) => {
        //const published = Date.parse(articleObject.getIn(['entities']).get(articleId).date)
        const published = Date.parse(articleObject.get(articleId).date)

        return (
          (!selected.length ||
            selected.find((selected) => selected.value === articleId)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .map((id) => {
        return articleObject.get(id)
      })
  }
)
