import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBooksRequest } from '../../BookActions'
import { getBooks } from '../../BookReducer'

import BookListItem from '../../components/BookListItem/BookListItem'

class BookListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBooksRequest())
  }


  render() {
    return (
      <div>
        {this.props.books.map(book => <BookListItem {...book} key={`${book.name}${book.seller}`} />)}
      </div>
    )
  }
}

BookListPage.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

BookListPage.need = [
  () => { return fetchBooksRequest() }
]

function mapStateToProps(state) {
  return {
    books: getBooks(state)
  }
}

export default connect(mapStateToProps)(BookListPage)
