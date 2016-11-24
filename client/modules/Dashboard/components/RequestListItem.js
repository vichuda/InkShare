import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

function RequestListItem(props) {
  const tradersBook = props.getBookByID(props.tradeRequest.tradersBookID)
  const book = props.getBookByID(props.tradeRequest.bookID)

  const tradeText = `
    ${props.tradeRequest.userName} wants to trade
    ${tradersBook ? tradersBook.name : ''} for
    ${book ? book.name : ''}
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

  if (!tradersBook || !book) {
    decline()
    return null
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
