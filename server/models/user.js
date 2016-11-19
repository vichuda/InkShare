import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  profile: {
    type: Schema.Types.Mixed,
    default: {
      username: '',
      password: '',
      id: ''
    }
  }
})

export default mongoose.model('User', userSchema)
