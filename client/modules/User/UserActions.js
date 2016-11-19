import callApi from '../../util/apiCaller'

export const SET_USER_PROFILE = 'SET_USER_PROFILE'


export function getUserRequest() {
  return function dispatchedRequest(dispatch) {
    return callApi('user')
      .then(response => dispatch(setUserProfile(response)))
      .catch(console.error) // eslint-disable-line
  }
}


export function login(username, password) {
  return callApi('login', 'POST', { username, password })
    .catch(err => console.error(err)) // eslint-disable-line
}


export function setUserProfile(userProfile) {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}
