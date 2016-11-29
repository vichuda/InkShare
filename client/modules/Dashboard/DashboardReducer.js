import { SET_TRADE_REQUESTS, ADD_TRADE_REQUEST, DELETE_TRADE_REQUEST, SET_SHIPMENTS, DELETE_SHIPMENT } from './DashboardActions'

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
        tradeRequests: [action.tradeRequest, ...state.tradeRequests],
        shipments: state.shipments
      }
    case DELETE_TRADE_REQUEST:
      return {
        tradeRequests: state.tradeRequests.filter(tradeRequest => tradeRequest !== action.tradeRequest),
        shipments: state.shipments
      }
    case SET_SHIPMENTS:
      return {
        tradeRequests: state.tradeRequests,
        shipments: action.shipments
      }
    case DELETE_SHIPMENT:
      return {
        tradeRequests: state.tradeRequests,
        shipments: state.shipments.filter(shipment => shipment !== action.shipment)
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
