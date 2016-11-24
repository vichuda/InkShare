import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class AddBookModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      image: '',
      description: ''
    }

    this.close = this.close.bind(this)
    this.save = this.save.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  close() {
    this.props.toggle(false)
  }


  save() {
    this.props.save(this.createBookEntryFromProps())
    this.eraseState()
    this.close()
  }


  createBookEntryFromProps() {
    const deepCopiedState = JSON.parse(JSON.stringify(this.state))
    return {
      name: deepCopiedState.title,
      author: deepCopiedState.author,
      image: deepCopiedState.image,
      description: deepCopiedState.description
    }
  }


  eraseState() {
    Object.keys(this.state)
      .forEach(key => this.setState({ [key]: '' }))
  }


  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }


  textField(key) {
    return (
      <TextField
        floatingLabelText={`${key[0].toUpperCase()}${key.substring(1)}`}
        id={key}
        value={this.state[key]}
        onChange={this.handleChange}
        fullWidth={Boolean(true)}
        type={key === 'price' ? 'number' : 'text'}
        autoComplete="off"
        key={key}
      />
    )
  }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={Boolean(true)}
        onClick={this.close}
      />,
      <FlatButton
        label="Save"
        primary={Boolean(true)}
        onClick={this.save}
        disabled={Object.keys(this.state).map(key => this.state[key].length === 0).indexOf(true) > -1}
      />
    ]

    return (
      <Dialog
        title="Add Book for Trade"
        modal={Boolean(true)}
        open={this.props.open}
        actions={actions}
        autoScrollBodyContent={Boolean(true)}
        onRequestClose={this.close}
      >
        <form>
          {Object.keys(this.state).map(key => this.textField(key))}
        </form>
      </Dialog>
    )
  }
}

AddBookModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
}

export default AddBookModal
