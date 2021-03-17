import { compose, converge, identity, max, min, reduce, without } from 'ramda'

const getLowest = reduce(min, Number.MAX_VALUE)
const getHighest = reduce(max, Number.MIN_VALUE)
const getExcluded = converge((a, b) => [a, b], [getLowest, getHighest])
const excludeLowHigh = converge(without, [getExcluded, identity])

const dropHighLow = (data) => {
  const low = reduce(min, Number.MAX_VALUE, data)
  const high = reduce(max, Number.MIN_VALUE, data)

  return without([low, high])(data)
}

const dropHighLow2 = (data) => {
  const excluded = getExcluded(data)

  return without(excluded)(data)
}

const dropHighLow3 = excludeLowHigh

export { dropHighLow, dropHighLow2, dropHighLow3 }
