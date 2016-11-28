import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { getTradeRequests } from '../../DashboardReducer'
import { fetchTradeRequests, fetchShipments, requestDeclineTradeRequest, requestAcceptTradeRequest } from '../../DashboardActions'
import { createBookRequest, fetchBooksRequest, deleteBookRequest } from '../../../Book/BookActions'
import { getBooksByUser, getBookByID } from '../../../Book/BookReducer'
import { getUser } from '../../../User/UserReducer'

import Requests from '../../components/Requests'
import Selling from '../../components/Selling'
import AddBookModal from '../../components/AddBookModal'

const style = {
  addBookButton: {
    position: 'absolute',
    right: '10%'
  }
}

class DashboardPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showRequests: false,
      addBookModalOpen: false
    }

    this.getBookByID = this.getBookByID.bind(this)
    this.handleRequestsClicked = this.handleRequestsClicked.bind(this)
    this.toggleShowRequests = this.toggleShowRequests.bind(this)
    this.handleSellingClicked = this.handleSellingClicked.bind(this)
    this.handleAddBookButtonClicked = this.handleAddBookButtonClicked.bind(this)
    this.handleAcceptTradeRequest = this.handleAcceptTradeRequest.bind(this)
    this.handleDeclineTradeRequest = this.handleDeclineTradeRequest.bind(this)
    this.toggleAddBookModal = this.toggleAddBookModal.bind(this)
    this.createBookEntry = this.createBookEntry.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
  }


  componentDidMount() {
    this.props.dispatch(fetchTradeRequests())
    this.props.dispatch(fetchBooksRequest())
    this.props.dispatch(fetchShipments())
  }


  getBookByID(id) {
    return this.props.stateBoundGetBookByID(id)
  }


  handleRequestsClicked() {
    this.toggleShowRequests(true)
  }


  toggleShowRequests(showRequests = false) {
    this.setState({ showRequests })
  }


  handleSellingClicked() {
    this.toggleShowRequests(false)
  }


  handleAddBookButtonClicked() {
    this.toggleAddBookModal(true)
  }


  handleAcceptTradeRequest(tradeRequest) {
    console.log('accepting the trade request: ', tradeRequest)
    this.props.dispatch(requestAcceptTradeRequest(tradeRequest))
      .then(response => console.log(response))
  }


  handleDeclineTradeRequest(tradeRequest) {
    this.props.dispatch(requestDeclineTradeRequest(tradeRequest))
  }


  toggleAddBookModal(addBookModalOpen = false) {
    this.setState({ addBookModalOpen })
  }


  createBookEntry(book) {
    this.props.dispatch(createBookRequest(book))
  }


  deleteBook(bookID) {
    this.props.dispatch(deleteBookRequest(bookID))
  }


  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Dashboard" />
            <ToolbarSeparator />
          </ToolbarGroup>
          <ToolbarGroup>
            <MenuItem primaryText="Selling" onClick={this.handleSellingClicked} />
            <MenuItem primaryText="Requests" onClick={this.handleRequestsClicked} />
          </ToolbarGroup>
        </Toolbar>

        {
          this.state.showRequests ?
            <Requests
              tradeRequests={this.props.tradeRequests}
              handleAcceptTradeRequest={this.handleAcceptTradeRequest}
              handleDeclineTradeRequest={this.handleDeclineTradeRequest}
              getBookByID={this.getBookByID}
            />
            :
            <Selling
              myBooks={this.props.myBooks}
              deleteBook={this.deleteBook}
            />
        }

        <AddBookModal
          open={this.state.addBookModalOpen}
          toggle={this.toggleAddBookModal}
          save={this.createBookEntry}
        />

        <FloatingActionButton
          onClick={this.handleAddBookButtonClicked}
          secondary={Boolean(true)}
          style={style.addBookButton}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

DashboardPage.propTypes = {
  tradeRequests: PropTypes.array.isRequired,
  myBooks: PropTypes.array.isRequired,
  stateBoundGetBookByID: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tradeRequests: getTradeRequests(state),
    myBooks: getBooksByUser(state, ((getUser(state) || {}).id || '')),
    stateBoundGetBookByID: getBookByID.bind(null, state)
  }
}

export default connect(mapStateToProps)(DashboardPage)
