import mongoose from 'mongoose'
const Schema = mongoose.Schema

const tradeRequestSchema = new Schema({
  tradersID: String,
  tradersBookID: String,
  userID: String,
  bookID: String,
  userName: String
})

export default mongoose.model('TradeRequest', tradeRequestSchema)
