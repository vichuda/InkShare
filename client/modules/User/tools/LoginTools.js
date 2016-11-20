export function handleFieldChange(e) {
  const field = e.target.name
  this.setState({ [field]: e.target.value })
}


export function isValidEnterKey(e, username, password) {
  return isEnterKey(e.key) && isValidCredentials(username, password)
}


export function isEnterKey(key) {
  return key === 'Enter'
}


export function isValidCredentials(username, password) {
  return username.length > 0
      && password.length > 0
}
