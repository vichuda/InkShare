import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Requests from '../../components/Requests'
import Selling from '../../components/Selling'
import AddBookModal from '../../components/AddBookModal'

const style = {
  addBookButton: {
    position: 'absolute',
    right: '10%'
  }
}

const tradeRequests = [
  {
    user: 'bob',
    tradersBook: 'a good book',
    book: 'another good book',
    tradeID: '123'
  },
  {
    user: 'joe',
    tradersBook: 'teuhaste',
    book: 'asethuc.huac23',
    tradeID: '124'
  }
]


const book = {
  name: 'Cracking the Coding Interview',
  author: 'Gayle Laakmann Mcdowell',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51F6Lwyq5JL._SX348_BO1,204,203,200_.jpg',
  description: 'a good book',
  seller: '4635324345',
  price: 1,
  id: '12493'
}


class DashboardPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showRequests: false,
      addBookModalOpen: false
    }

    this.handleSellingClicked = this.handleSellingClicked.bind(this)
    this.handleRequestsClicked = this.handleRequestsClicked.bind(this)
    this.toggleShowRequests = this.toggleShowRequests.bind(this)
    this.handleAddBookButtonClicked = this.handleAddBookButtonClicked.bind(this)
    this.handleAcceptTradeRequest = this.handleAcceptTradeRequest.bind(this)
    this.handleDeclineTradeRequest = this.handleDeclineTradeRequest.bind(this)
    this.toggleAddBookModal = this.toggleAddBookModal.bind(this)
    this.createBookEntry = this.createBookEntry.bind(this)
  }


  handleSellingClicked() {
    this.toggleShowRequests(false)
  }


  handleRequestsClicked() {
    this.toggleShowRequests(true)
  }


  toggleShowRequests(showRequests = false) {
    this.setState({ showRequests })
  }


  handleAddBookButtonClicked() {
    this.toggleAddBookModal(true)
  }


  handleAcceptTradeRequest(tradeID) {
    console.log('accepting the trade request: ', tradeID)
  }


  handleDeclineTradeRequest(tradeID) {
    console.log('declining the trade request ', tradeID)
  }


  toggleAddBookModal(addBookModalOpen = false) {
    this.setState({ addBookModalOpen })
  }


  createBookEntry(book) {
    console.log('creating the book entry: ', book)
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
              tradeRequests={tradeRequests}
              handleAcceptTradeRequest={this.handleAcceptTradeRequest}
              handleDeclineTradeRequest={this.handleDeclineTradeRequest}
            />
            :
            <Selling />
        }

        <AddBookModal open={this.state.addBookModalOpen} toggle={this.toggleAddBookModal} save={this.createBookEntry} />
        <FloatingActionButton onClick={this.handleAddBookButtonClicked} secondary={Boolean(true)} style={style.addBookButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

DashboardPage.propTypes = {}

export default DashboardPage
