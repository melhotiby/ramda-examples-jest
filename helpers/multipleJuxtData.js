import {
  add,
  compose,
  converge,
  countBy,
  curry,
  divide,
  evolve,
  filter,
  flatten,
  groupBy,
  head,
  identity,
  juxt,
  keys,
  last,
  length,
  map,
  max,
  mergeAll,
  min,
  objOf,
  prop,
  propEq,
  reduce,
  sortBy,
  sum,
  tail,
  tap,
  values,
  without,
} from 'ramda'

const getTotalAge = compose(sum, map(prop('age')))
const getAverageAge = compose(
  objOf('averageAge'),
  converge(divide, [getTotalAge, length])
)

const getYoungestUserId = compose(
  objOf('youngestUserId'),
  prop('id'),
  head,
  sortBy(prop('age'))
)

const getActiveCount = compose(
  objOf('activeCount'),
  length,
  filter(propEq('isActive', true))
)

const getHighestScore = compose(
  objOf('highestScore'),
  prop('score'),
  last,
  sortBy(prop('score'))
)

const getDepartmentCounts = compose(
  objOf('departmentCounts'),
  countBy(prop('department'))
)

const getShortestName = compose(
  objOf('shortestName'),
  prop('name'),
  head,
  sortBy(compose(length, prop('name')))
)

const multipleJuxtData = compose(
  mergeAll,
  juxt([
    getYoungestUserId,
    getAverageAge,
    getActiveCount,
    getHighestScore,
    getDepartmentCounts,
    getShortestName,
  ])
)

export { multipleJuxtData }
