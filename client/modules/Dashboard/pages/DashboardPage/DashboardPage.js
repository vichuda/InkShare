import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { getTradeRequests, getShipments } from '../../DashboardReducer'
import { fetchTradeRequests, fetchShipments, requestDeclineTradeRequest, requestAcceptTradeRequest, requestDeleteShipment } from '../../DashboardActions'
import { createBookRequest, fetchBooksRequest, deleteBookRequest } from '../../../Book/BookActions'
import { getBooksByUser, getBookByID } from '../../../Book/BookReducer'
import { getUser } from '../../../User/UserReducer'

import Requests from '../../components/Requests'
import Selling from '../../components/Selling'
import Shipments from '../../components/Shipments'
import AddBookModal from '../../components/AddBookModal'

import appStyles from '../../../App/App.css'
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
      shownSubpage: 'selling',
      addBookModalOpen: false
    }

    this.getBookByID = this.getBookByID.bind(this)
    this.handleSubheaderButtonClicked = this.handleSubheaderButtonClicked.bind(this)
    this.handleAddBookButtonClicked = this.handleAddBookButtonClicked.bind(this)
    this.handleAcceptTradeRequest = this.handleAcceptTradeRequest.bind(this)
    this.handleDeclineTradeRequest = this.handleDeclineTradeRequest.bind(this)
    this.toggleAddBookModal = this.toggleAddBookModal.bind(this)
    this.createBookEntry = this.createBookEntry.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.handleSellingButtonClicked = this.handleSellingButtonClicked.bind(this)
    this.handleRequestsButtonClicked = this.handleRequestsButtonClicked.bind(this)
    this.handleShipmentsButtonClicked = this.handleShipmentsButtonClicked.bind(this)
    this.getShownSubpage = this.getShownSubpage.bind(this)
    this.deleteShipment = this.deleteShipment.bind(this)
  }


  componentDidMount() {
    this.props.dispatch(fetchTradeRequests())
    this.props.dispatch(fetchBooksRequest())
    this.props.dispatch(fetchShipments())
  }


  getBookByID(id) {
    return this.props.stateBoundGetBookByID(id)
  }


  handleSubheaderButtonClicked(e) {
    this.setState({ shownSubpage: e.target.id })
  }


  handleAddBookButtonClicked() {
    this.toggleAddBookModal(true)
  }


  handleAcceptTradeRequest(tradeRequest) {
    this.props.dispatch(requestAcceptTradeRequest(tradeRequest))
      .then(() => this.props.dispatch(fetchShipments()))
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


  handleSellingButtonClicked() {
    this.setState({ shownSubpage: 'selling' })
  }


  handleRequestsButtonClicked() {
    this.setState({ shownSubpage: 'requests' })
  }


  handleShipmentsButtonClicked() {
    this.setState({ shownSubpage: 'shipments' })
  }


  deleteShipment(shipment) {
    this.props.dispatch(requestDeleteShipment(shipment))
  }


  getShownSubpage() {
    switch (this.state.shownSubpage) {
      case 'selling':
        return (
          <Selling
            myBooks={this.props.myBooks}
            deleteBook={this.deleteBook}
          />
        )
      case 'requests':
        return (
          <Requests
            tradeRequests={this.props.tradeRequests}
            handleAcceptTradeRequest={this.handleAcceptTradeRequest}
            handleDeclineTradeRequest={this.handleDeclineTradeRequest}
            getBookByID={this.props.stateBoundGetBookByID}
          />
        )
      case 'shipments':
        return (
          <Shipments
            shipments={this.props.shipments}
            deleteShipment={this.deleteShipment}
          />
        )
      default:
        return null
    }
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
            <MenuItem primaryText="Selling" onClick={this.handleSellingButtonClicked} />
            <MenuItem primaryText="Requests" onClick={this.handleRequestsButtonClicked} />
            <MenuItem primaryText="Shipments" onClick={this.handleShipmentsButtonClicked} />
          </ToolbarGroup>
        </Toolbar>

        <div className={appStyles.container}>
          {this.getShownSubpage()}

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
      </div>
    )
  }
}

DashboardPage.propTypes = {
  tradeRequests: PropTypes.array.isRequired,
  shipments: PropTypes.array.isRequired,
  myBooks: PropTypes.array.isRequired,
  stateBoundGetBookByID: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tradeRequests: getTradeRequests(state),
    shipments: getShipments(state),
    myBooks: getBooksByUser(state, ((getUser(state) || {}).id || '')),
    stateBoundGetBookByID: getBookByID.bind(null, state)
  }
}

export default connect(mapStateToProps)(DashboardPage)
