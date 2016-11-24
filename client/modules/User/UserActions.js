import callApi from '../../util/apiCaller'

export const SET_USER = 'SET_USER'


export function getUserRequest() {
  return function dispatchedRequest(dispatch) {
    return callApi('user')
      .then(response => dispatch(setUser(response.data)))
      .catch(console.error) // eslint-disable-line
  }
}


export function login(username, password, signup) {
  return callApi('login', 'POST', { username, password, signup })
    .catch(err => console.error(err)) // eslint-disable-line
}


export function requestLogout() {
  return function dispatchedRequest(dispatch) {
    dispatch(setUser(null))
    return callApi('logout', 'put')
      .catch(err => console.error(err)) // eslint-disable-line
  }
}


export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}
