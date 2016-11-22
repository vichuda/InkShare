import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

function RequestListItem(props) {
  const tradeText = `${props.tradeRequest.user} wants to trade ${props.tradeRequest.tradersBook} for ${props.tradeRequest.book}`
  const rightButtons = (
    <span>
      <FlatButton secondary={Boolean(true)} label="Decline" onClick={decline} />
      <FlatButton primary={Boolean(true)} label="Accept" onClick={accept} />
    </span>
  )

  function accept() {
    props.acceptRequest(props.tradeRequest.tradeID)
  }


  function decline() {
    props.declineRequest(props.tradeRequest.tradeID)
  }

  return (
    <ListItem
      primaryText={tradeText}
      nestedItems={[rightButtons]}
      open={Boolean(true)}
      rightIconButton={<FlatButton disabled={Boolean(true)} label="" />}
    />
  )
}

RequestListItem.propTypes = {
  tradeRequest: PropTypes.object.isRequired,
  acceptRequest: PropTypes.func.isRequired,
  declineRequest: PropTypes.func.isRequired
}

export default RequestListItem
