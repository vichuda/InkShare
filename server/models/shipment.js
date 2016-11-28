import mongoose from 'mongoose'
const Schema = mongoose.Schema

const shipmentSchema = new Schema({
  shipToUser: String,
  originalUser: String,
  book: String
})

export default mongoose.model('Shipment', shipmentSchema)
