import R from 'ramda'
export const getTotalBasketCount= state => R.length(state.bucket)