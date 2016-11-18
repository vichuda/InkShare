import { ADD_BOOKS } from './BookActions'

const initialState = []

function InkShareReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return [...action.books]
    default:
      return state
  }
}


export function getBooks(state) {
  return state.books
}

export default InkShareReducer
