import React, { PropTypes, Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Requests from '../../components/Requests'
import Selling from '../../components/Selling'

const style = {
  addBookButton: {
    position: 'absolute',
    right: '15%'
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

class DashboardPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showRequests: true
    }

    this.handleSellingClicked = this.handleSellingClicked.bind(this)
    this.handleRequestsClicked = this.handleRequestsClicked.bind(this)
    this.toggleShowRequests = this.toggleShowRequests.bind(this)
    this.handleAddBookButtonClicked = this.handleAddBookButtonClicked.bind(this)
    this.handleAcceptTradeRequest = this.handleAcceptTradeRequest.bind(this)
    this.handleDeclineTradeRequest = this.handleDeclineTradeRequest.bind(this)
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
    console.log('add book button clicked')
  }


  handleAcceptTradeRequest(tradeID) {
    console.log('accepting the trade request: ', tradeID)
  }


  handleDeclineTradeRequest(tradeID) {
    console.log('declining the trade request ', tradeID)
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

        <FloatingActionButton onClick={this.handleAddBookButtonClicked} secondary={Boolean(true)} style={style.addBookButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

DashboardPage.propTypes = {}

export default DashboardPage
