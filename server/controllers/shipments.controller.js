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
      res.send({ data: injectedShipments })
    })
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


export function deleteShipment(req, res) {
  Shipment.findOneAndRemove(req.body)
    .catch(console.error) // eslint-disable-line
  res.status(204).end()
}
