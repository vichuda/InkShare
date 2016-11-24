import { ADD_BOOKS, ADD_BOOK, DELETE_BOOK } from './BookActions'

const initialState = []

function InkShareReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return [...action.books]
    case ADD_BOOK:
      return [action.book, ...state]
    case DELETE_BOOK:
      return state.filter(currentBook => currentBook.id !== action.bookID)
    default:
      return state
  }
}


export function getBooks(state) {
  return state.books
}


export function getBooksByUser(state, userID) {
  return state.books.filter(currentBook => currentBook.seller === userID)
}


export function getBookByID(state, id) {
  return state.books.filter(currentBook => currentBook.id === id)[0]
}

export default InkShareReducer
