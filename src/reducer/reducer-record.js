import { OrderedMap, Record } from 'immutable'

export const defaultArticleMapRec = (arr, ItemRec) => {
  return arr.reduce((acc, item) => {
    return acc.set(item.id, ItemRec ? new ItemRec(item) : item)
  }, new OrderedMap())
}

const ReducerRecord = Record({
  entities: defaultArticleMapRec([], Record),
  loading: false,
  loaded: false,
  error: null
})

export default ReducerRecord
