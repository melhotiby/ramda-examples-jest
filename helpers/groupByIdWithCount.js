import {
  add,
  compose,
  converge,
  curry,
  evolve,
  flatten,
  groupBy,
  head,
  identity,
  juxt,
  keys,
  length,
  map,
  max,
  mergeAll,
  min,
  prop,
  reduce,
  sortBy,
  sum,
  tail,
  values,
  without
} from 'ramda'

const groupByname = prop('name')
const byGrade = groupBy(data => groupByname(data))

const buildObject = curry((data, key) => {
  const elementData = data[key]
  const filteredData = map(prop(['cost']))(elementData)
  const getId = compose(head, map(prop(['id'])))(elementData)

  return {
    id: getId,
    name: key,
    total: sum(filteredData),
    count: length(filteredData)
  }
})

const getSums = data => compose(map(buildObject(data)), keys)(data)

const groupByIdWithCount = compose(
  sortBy(prop('id')),
  flatten,
  getSums,
  byGrade
)

export { groupByIdWithCount }
