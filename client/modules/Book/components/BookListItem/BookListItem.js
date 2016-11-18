import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

function BookListItem(props) {
  return (
    <div style={{ padding: '10px' }}>
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
          <FlatButton label="Request Trade" primary={Boolean(true)} />
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
  price: PropTypes.number.isRequired,
}

export default BookListItem
