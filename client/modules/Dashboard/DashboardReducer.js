import { SET_TRADE_REQUESTS, ADD_TRADE_REQUEST, DELETE_TRADE_REQUEST, SET_SHIPMENTS } from './DashboardActions'

// const initialState = []
const initialState = {
  tradeRequests: [],
  shipments: []
}

function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRADE_REQUESTS:
      return {
        tradeRequests: action.tradeRequests,
        shipments: state.shipments
      }
    case ADD_TRADE_REQUEST:
      return {
        tradeRequests: [action.tradeRequest, ...state],
        shipments: state.shipments
      }
    case DELETE_TRADE_REQUEST:
      return {
        tradeRequests: state.filter(tradeRequest => tradeRequest !== action.tradeRequest),
        shipments: state.shipments
      }
    case SET_SHIPMENTS:
      return {
        tradeRequests: state.tradeRequests,
        shipments: action.shipments
      }
    default:
      return state
  }
}


export function getTradeRequests(state) {
  return state.dashboard.tradeRequests
}


export function getShipments(state) {
  return state.dashboard.shipments
}

export default DashboardReducer
