import callApi from '../../util/apiCaller'

export const SET_TRADE_REQUESTS = 'SET_TRADE_REQUESTS'
export const ADD_TRADE_REQUEST = 'ADD_TRADE_REQUEST'
export const DELETE_TRADE_REQUEST = 'DELETE_TRADE_REQUEST'
export const SET_SHIPMENTS = 'SET_SHIPMENTS'

export function fetchTradeRequests() {
  return function dispatchedRequest(dispatch) {
    return callApi('books/trade/request')
      .then(tradeRequests => dispatch(setTradeRequests(tradeRequests)))
  }
}


export function fetchShipments() {
  return function dispatchedRequest(dispatch) {
    return callApi('shipments')
      .then(shipments => {
        console.log('setting the shipments: ', shipments)
        // dispatch(setShipments(shipments))
      })
  }
}


export function requestCreateTradeRequest(bookID, tradersBookID, userID, userName) {
  return function dispatchedRequest(dispatch) {
    return callApi('books/trade/request', 'post', { bookID, tradersBookID, userID, userName })
      .then(({ tradeRequest }) => {
        if (tradeRequest) {
          return dispatch(addTradeRequest(tradeRequest))
        }
        dispatch({ type: null })
      })
  }
}


export function requestAcceptTradeRequest(tradeRequest) {
  return function dispatchedRequest(dispatch) {
    dispatch(deleteTradeRequest(tradeRequest))
    return callApi('/books/trade/request', 'put', tradeRequest)
      .then(response => console.log('your server response ', response))
  }
}


export function requestDeclineTradeRequest(tradeRequest) {
  return function dispatchedRequest(dispatch) {
    return callApi('/books/trade/request', 'delete', tradeRequest)
      .then(() => dispatch(deleteTradeRequest(tradeRequest)))
  }
}


export function setTradeRequests(tradeRequests) {
  return {
    type: SET_TRADE_REQUESTS,
    tradeRequests
  }
}


export function addTradeRequest(tradeRequest) {
  return {
    type: ADD_TRADE_REQUEST,
    tradeRequest
  }
}


export function deleteTradeRequest(tradeRequest) {
  return {
    type: DELETE_TRADE_REQUEST,
    tradeRequest
  }
}


export function setShipments(shipments) {
  return {
    type: SET_SHIPMENTS,
    shipments
  }
}
