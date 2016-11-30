/**
 * Root Reducer
 */
import { combineReducers } from 'redux'

// Import Reducers
import app from './modules/App/AppReducer'
import posts from './modules/Post/PostReducer'
import books from './modules/Book/BookReducer'
import user from './modules/User/UserReducer'
import dashboard from './modules/Dashboard/DashboardReducer'

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  books,
  user,
  dashboard
});
