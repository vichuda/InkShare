import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class TradeRequestModel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      bookID: '',
      userName: '',
      bookSellerID: '',
      tradersBookID: ''
    }

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.initiateTrade = this.initiateTrade.bind(this)
    this.handleSelectBookChange = this.handleSelectBookChange.bind(this)
  }


  componentDidMount() {
    this.props.setOpenFunction(this.open)
  }


  close() {
    this.setState({ isOpen: false })
  }


  open(bookID, bookSellerID, userName) {
    this.setState({ isOpen: true })
    this.setState({ bookID })
    this.setState({ bookSellerID })
    this.setState({ userName })
  }


  handleSelectBookChange(event, index, value) {
    this.setState({ tradersBookID: value })
  }


  initiateTrade() {
    this.props.requestTrade(this.state.bookID,
        this.state.tradersBookID,
        this.state.bookSellerID,
        this.state.userName)
    this.close()
  }


  render() {
    const dialogActions = [
      <FlatButton
        label="Cancel"
        secondary={Boolean(true)}
        onClick={this.close}
      />,
      <FlatButton
        label="Request Trade"
        primary={Boolean(true)}
        onClick={this.initiateTrade}
      />
    ]

    return (
      <Dialog
        open={this.state.isOpen}
        actions={dialogActions}
        onRequestClose={this.close}
        modal={Boolean(true)}
      >
        <h3>Select book to trade with</h3>
        <SelectField
          fullWidth={Boolean(true)}
          value={this.state.tradersBookID}
          onChange={this.handleSelectBookChange}
          autoWidth={Boolean(true)}
        >
          {this.props.usersBooks.map(book =>
            <MenuItem
              primaryText={book.name}
              value={book.id}
              key={book.id}
            />
          )}
        </SelectField>
      </Dialog>
    )
  }
}

TradeRequestModel.propTypes = {
  usersBooks: PropTypes.array.isRequired,
  requestTrade: PropTypes.func.isRequired,
  setOpenFunction: PropTypes.func.isRequired
}

export default TradeRequestModel
