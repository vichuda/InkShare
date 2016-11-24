import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String,
  author: String,
  image: String,
  description: String,
  seller: String,
  id: String
})

export default mongoose.model('Book', bookSchema)
