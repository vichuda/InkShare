export function getUser(req, res) {
  res.send({ data: (req.user || null) })
}


export function updateShippingInfo(req, res) {
  if (!req.user) {
    return res.status(403).end()
  }
  const user = req.user

  user.fullName = req.body.fullName
  user.shippingAddress = req.body.shippingAddress

  user.save()
    .then(savedUser => res.send({ data: savedUser }))
    .catch(error => {
      res.status(500).end()
      console.error(error) // eslint-disable-line
    })
}
