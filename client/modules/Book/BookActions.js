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


export function addBooks(books) {
  return {
    type: ADD_BOOKS,
    books
  }
}
