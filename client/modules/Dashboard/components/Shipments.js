import React, { PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'

function Shipments(props) {
  const shippingAddressNotSetup = 'the user hasn\'t setup shipping info'
  const shippingAddress = shipment => `package and send ${shipment.databaseObject.book} to ${shipment.fullName} at ${shipment.shippingAddress}`

  return (
    <List>
      <Subheader>Shipments</Subheader>
      {props.shipments.map(shipment =>
        <ListItem
          primaryText={
            shipment.shippingAddress
                ? shippingAddress(shipment)
                : shippingAddressNotSetup
          }
          rightIconButton={
            <FlatButton
              label="Shipped"
              onClick={() => props.deleteShipment(shipment)}
              disabled={!shipment.shippingAddress || !shipment.fullName}
            />
          }
          key={`${shipment.databaseObject.book}${shipment.shippingAddress}`}
        />
      )}
    </List>
  )
}

Shipments.propTypes = {
  shipments: PropTypes.array.isRequired,
  deleteShipment: PropTypes.func.isRequired
}

export default Shipments
