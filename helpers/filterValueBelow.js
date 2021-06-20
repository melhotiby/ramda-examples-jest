import {
  __,
  add,
  compose,
  converge,
  curry,
  evolve,
  filter,
  flatten,
  groupBy,
  head,
  identity,
  juxt,
  keys,
  length,
  lt,
  map,
  max,
  mergeAll,
  min,
  prop,
  propEq,
  reduce,
  sortBy,
  sum,
  tail,
  values,
  where,
  without
} from 'ramda'

const filterCategory = category => filter(propEq('category', category))
const filterPriceUnder = price =>
  filter(
    where({
      price: lt(__, price)
    })
  )

const filterPriceBelow = price => filterPriceUnder(price)

const filterPriceAndCategoryBelow = (price, category) =>
  compose(filterPriceUnder(price), filterCategory(category))

export { filterPriceBelow, filterPriceAndCategoryBelow }
