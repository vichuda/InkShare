import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

function RequestListItem(props) {
  const tradeText = `
    ${props.tradeRequest.userName} wants to trade
    ${props.getBookByID(props.tradeRequest.tradersBookID).name} for
    ${props.getBookByID(props.tradeRequest.bookID).name}
  `
  const rightButtons = [
    <FlatButton secondary={Boolean(true)} label="Decline" onClick={decline} />,
    <FlatButton primary={Boolean(true)} label="Accept" onClick={accept} />
  ]

  function accept() {
    props.acceptRequest(props.tradeRequest)
  }


  function decline() {
    props.declineRequest(props.tradeRequest)
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
  getBookByID: PropTypes.func.isRequired,
  acceptRequest: PropTypes.func.isRequired,
  declineRequest: PropTypes.func.isRequired
}

export default RequestListItem
