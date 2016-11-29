import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  fullname: String,
  shippingAddress: String,
  id: String
})

export default mongoose.model('User', userSchema)
