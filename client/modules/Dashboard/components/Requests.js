import React, { PropTypes } from 'react'
import List from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import RequestListItem from './RequestListItem'

const style = {
  borderWidth: '20px',
  borderColor: 'red'
}

function Requests(props) {
  return (
    <List style={style}>
      <Subheader>Trade Requests</Subheader>
      {props.tradeRequests.map(tradeRequest =>
        <RequestListItem
          tradeRequest={tradeRequest}
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
  handleDeclineTradeRequest: PropTypes.func.isRequired
}

export default Requests
