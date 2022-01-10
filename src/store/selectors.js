import { get } from 'lodash'
import { createSelector } from 'reselect'

const account = state => get(state, 'web3.account')
export const accountSelector = createSelector(account, a => a)

const web3 = state => get(state, 'web3.connection')
export const web3Selector = createSelector(web3, w => w)

const pdsLoaded = state => get(state, 'pds.loaded', false)
export const pdsLoadedSelector = createSelector(pdsLoaded, tl => tl)

const pds = state => get(state, 'pds.contract')
export const pdsSelector = createSelector(pds, t => t)

// const shops = state => get(state, 'pds.shops',[])
// export const shopDetailSelector = createSelector(shops,shop=> shop)


