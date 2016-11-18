import callApi from '../../util/apiCaller'

export function login(username, password) {
  return callApi('login', 'POST', { username, password })
    .catch(err => console.error(err))
}
