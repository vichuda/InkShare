import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

function BookListItem(props) {
  function requestTrade() {
    props.requestTrade(props.id, props.seller, props.user.username)
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <CardHeader
          title={props.name}
          subtitle={`By: ${props.author}`}
        />
        <CardMedia>
          <img src={props.image} alt="book cover" style={{ maxHeight: '800px', maxWidth: '200px' }} />
        </CardMedia>
        <CardText>
          {props.description}
        </CardText>
        <CardActions>
          {
            !!props.user && props.user.id !== props.seller
                ? <FlatButton label="Request Trade" onClick={requestTrade} primary={Boolean(true)} />
                : null
          }
        </CardActions>
      </Card>
    </div>
  )
}

BookListItem.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  requestTrade: PropTypes.func.isRequired,
  user: PropTypes.object
}

export default BookListItem
