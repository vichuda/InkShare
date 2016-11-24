import { SET_TRADE_REQUESTS, ADD_TRADE_REQUEST, DELETE_TRADE_REQUEST } from './DashboardActions'

const initialState = []

function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRADE_REQUESTS:
      return action.tradeRequests
    case ADD_TRADE_REQUEST:
      return [action.tradeRequest, ...state]
    case DELETE_TRADE_REQUEST:
      return state.filter(tradeRequest => tradeRequest !== action.tradeRequest)
    default:
      return state
  }
}

export function getTradeRequests(state) {
  return state.dashboard
}

export default DashboardReducer
