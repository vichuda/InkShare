import React, { PropTypes } from 'react'
import List from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import RequestListItem from './RequestListItem'

function Requests(props) {
  return (
    <List>
      <Subheader>Trade Requests</Subheader>
      {props.tradeRequests.map(tradeRequest =>
        <RequestListItem
          tradeRequest={tradeRequest}
          getBookByID={props.getBookByID}
          acceptRequest={props.handleAcceptTradeRequest}
          declineRequest={props.handleDeclineTradeRequest}
          key={tradeRequest.tradeID}
        />
      )}
    </List>
  )
}

Requests.propTypes = {
  tradeRequests: PropTypes.array.isRequired,
  handleAcceptTradeRequest: PropTypes.func.isRequired,
  handleDeclineTradeRequest: PropTypes.func.isRequired,
  getBookByID: PropTypes.func.isRequired
}

export default Requests
