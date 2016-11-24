import callApi from '../../util/apiCaller'

export const ADD_BOOK = 'ADD_BOOK'
export const ADD_BOOKS = 'ADD_BOOKS'
export const DELETE_BOOK = 'DELETE_BOOK'

export function fetchBooksRequest() {
  return function dispatchedRequest(dispatch) {
    return callApi('books')
      .then(books => dispatch(addBooks(books)))
      .catch(err => console.error(err)) // eslint-disable-line
  }
}


export function createBookRequest(book) {
  return function dispatchedRequest(dispatch) {
    return callApi('books', 'post', book)
      .then(createdBook => dispatch(addBook(createdBook)))
  }
}


export function deleteBookRequest(bookID) {
  return function dispatchedRequest(dispatch) {
    dispatch(deleteBook(bookID))
    return callApi('books', 'delete', { id: bookID })
  }
}


export function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books
  }
}


export function addBook(book) {
  return {
    type: ADD_BOOK,
    book
  }
}


export function deleteBook(bookID) {
  return {
    type: DELETE_BOOK,
    bookID
  }
}
