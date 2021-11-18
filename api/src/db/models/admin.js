
const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  firstName: {
        type: String,
        required: true,
        maxlength: 45
  },
  middleName: {
        type: String,
        required: true,
        maxlength: 45
  },
  lastName: {
        type: String,
        required: true,
        maxlength: 45
  },
  secondSurname: {
        type: String,
        required: true,
        maxlength: 45
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },
  rol: {
      admin:{
        type: Boolean,
        default: true,
      },
      teacher:{
        type: Boolean,
        default: false,
      },
      xy:{
        type: Boolean,
        default: false,
      },
  },
  passwordHash: {
    type: String,
    require: true,
    min :8,
  },
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Admin = model('Admin', adminSchema)

module.exports = Admin