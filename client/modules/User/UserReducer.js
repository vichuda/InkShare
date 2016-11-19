import { SET_USER_PROFILE } from './UserActions'

const initialState = { userProfile: null }

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return !action.userProfile || action.userProfile.error ? initialState : { userProfile: action.userProfile }
    default:
      return state
  }
}

export function getUserProfile(state) {
  return state.user.userProfile
}

export default UserReducer
