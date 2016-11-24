import React, { PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'

function Selling(props) {
  return (
    <List>
      <Subheader>Selling</Subheader>
      {props.myBooks.map(book =>
        <ListItem
          primaryText={book.name}
          key={book.id}
          rightIconButton={
            <IconButton onClick={() => props.deleteBook(book.id)}>
              <ActionDelete />
            </IconButton>
          }
        />
      )}
    </List>
  )
}

Selling.propTypes = {
  myBooks: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired
}

export default Selling
