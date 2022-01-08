import { combineReducers } from 'redux';

function web3(state = {}, action) {
  switch (action.type) {
    case 'WEB3_LOADED':
      return { ...state,  connection: action.connection }
    case 'WEB3_ACCOUNT_LOADED':
      return { ...state, account: action.account }
    default:
      return state
  }
}

function pds(state = {}, action) {
  switch (action.type) {
    case 'PDS_LOADED':
      return { ...state, loaded: true, contract: action.contract}
    default:
    return state
  }
}

const rootReducer = combineReducers({
  web3,
  pds,
})

export default rootReducer
