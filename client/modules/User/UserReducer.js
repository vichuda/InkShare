import { SET_USER } from './UserActions'

const initialState = null

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

export function getUser(state) {
  return state.user
}

export default UserReducer
