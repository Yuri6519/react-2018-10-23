//import { normalizedComments } from '../fixtures'
import { SHOW_COMMENT_PAGES, COMMENT_PAGES_COUNT } from '../constants'
import { Record } from 'immutable'
import ReducerRecord, { defaultArticleMapRec } from './reducer-record'

const PageRecord = Record({
  id: null,
  min: null,
  max: null
})

export default (pageState = new ReducerRecord(), action) => {
  if (action.type === SHOW_COMMENT_PAGES) {
    // кол-во комментариев приходит сверху
    const { comment_total } = action.payload

    // moks
    //const comment_total = 28

    const pagesTotal = Math.ceil(comment_total / COMMENT_PAGES_COUNT)
    const arr = []

    for (let i = 1; i <= pagesTotal; i++) {
      let minEl = (i - 1) * COMMENT_PAGES_COUNT
      let maxEl = minEl + COMMENT_PAGES_COUNT - 1
      arr[arr.length] = {
        id: i,
        min: minEl,
        max: maxEl
      }
    }

    console.log('SHOW_COMMENT_PAGES.pagesTotal::', pagesTotal)
    console.log('SHOW_COMMENT_PAGES.pagesTotal::', arr)

    return pageState.set('entities', defaultArticleMapRec(arr, PageRecord))
  }

  return pageState
}
