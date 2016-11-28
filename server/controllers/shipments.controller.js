import Shipment from '../models/shipment'
import User from '../models/user'

export function getUsersPendingShipments(req, res) {
  if (!req.user) {
    return res.status(403).end()
  }
  // run through the shipments and put in the address to the recipients
  Shipment.find({ originalUser: req.user.id })
    .then(shipments => Promise.all(shipments.map(injectShippingInfo)))
    .then(injectedShipments => {
      console.log(injectedShipments)
      res.send({ data: injectedShipments })
    })
  // res.send({ message: 'fuck you bitch' })
}


function injectShippingInfo(shipment) {
  return findUserInShipment(shipment)
    .then(({ shippingAddress, zipCode }) => {
      return {
        shippingAddress,
        zipCode,
        book: shipment.book,
        databaseObject: shipment
      }
    })
}


function findUserInShipment(shipment) {
  return User.findOne({ id: shipment.shipToUser })
}
