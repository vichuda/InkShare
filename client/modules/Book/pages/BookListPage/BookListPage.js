import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBooksRequest } from '../../BookActions'
import { getBooks, getBooksByUser } from '../../BookReducer'
import { requestCreateTradeRequest } from '../../../Dashboard/DashboardActions'
import { getUser } from '../../../User/UserReducer'

import BookListItem from '../../components/BookListItem/BookListItem'
import TradeRequestModel from '../../components/TradeRequestModel'


class BookListPage extends Component {
  constructor(props) {
    super(props)

    this.requestTrade = this.requestTrade.bind(this)
    this.openTradeRequestModel = () => {}
  }


  componentDidMount() {
    this.props.dispatch(fetchBooksRequest())
  }


  requestTrade(bookID, tradersBookID, userID, userName) {
    this.props.dispatch(requestCreateTradeRequest(bookID, tradersBookID, userID, userName))
  }


  render() {
    return (
      <div>
        {this.props.books.map(book =>
          <BookListItem
            {...book}
            requestTrade={this.openTradeRequestModel}
            user={this.props.user}
            key={`${book.name}${book.seller}`}
          />
        )}

        <TradeRequestModel
          usersBooks={this.props.usersBooks}
          requestTrade={this.requestTrade}
          setOpenFunction={openFunction => (this.openTradeRequestModel = openFunction)}
        />
      </div>
    )
  }
}

BookListPage.propTypes = {
  books: PropTypes.array.isRequired,
  usersBooks: PropTypes.array.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

BookListPage.need = [
  () => { return fetchBooksRequest() }
]

function mapStateToProps(state) {
  const user = getUser(state)
  const userID = user ? user.id : ''
  return {
    books: getBooks(state),
    usersBooks: getBooksByUser(state, userID),
    user
  }
}

export default connect(mapStateToProps)(BookListPage)
