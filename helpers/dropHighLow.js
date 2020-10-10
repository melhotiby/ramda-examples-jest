import {
  head,
  last,
  sort,
  compose,
  omit,
  filter,
  without,
  min,
  max,
  reduce,
  converge
} from 'ramda'

const getLowest = reduce(min, Number.MAX_VALUE)
const getHighest = reduce(max, Number.MIN_VALUE)

const dropHighLow = (data) => {
  const low = reduce(min, Number.MAX_VALUE, data)
  const high = reduce(max, Number.MIN_VALUE, data)

  return without([low, high])(data)
}

const dropHighLow2 = (data) => {
  const getLowest = reduce(min, Number.MAX_VALUE)
  const getHighest = reduce(max, Number.MIN_VALUE)
  const getExcluded = converge((a, b) => [a, b], [getLowest, getHighest])

  const excluded = getExcluded(data)

  return without(excluded)(data)
}

export { dropHighLow, dropHighLow2 }
