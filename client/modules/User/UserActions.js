import callApi from '../../util/apiCaller'

export const SET_USER = 'SET_USER'


export function getUserRequest() {
  return function dispatchedRequest(dispatch) {
    return callApi('user')
      .then(response => dispatch(setUser(response)))
      .catch(err => console.error(err))
  }
}


export function login(username, password) {
  return callApi('login', 'POST', { username, password })
    .catch(err => console.error(err)) // eslint-disable-line
}


export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}
