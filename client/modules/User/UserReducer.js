import { SET_USER } from './UserActions'

const initialState = null

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return !action.user || action.user.error ? null : action.user
    default:
      return !action.user || action.user.error ? null : state
  }
}

export function getUser(state) {
  return state.user
}

export default UserReducer
