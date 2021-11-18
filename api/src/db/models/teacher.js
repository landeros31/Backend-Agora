const { Schema, model } = require('mongoose')

const teacherSchema = new Schema({
  
  names:{
      type:String,
      trim:true,
      required:true,
      unique:false,
      max:24,
      min:3,
  },
  surnames:{
    type:String,
    trim:true,
    required:true,
    unique:false,
    max:24,
    min:3,
},
email:{
    type:String,
    trim:true,
    lowercase: true,
    required:true,
    unique:true,
    max:64,
},
passwordHash: {
    type:String,
    min:8,
},
rol:{

    admin:{
        type:Boolean,
        default:false,
    },
    teacher:{
        type:Boolean,
        default:false,
    }
},
})

teacherSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Teacher = model('Teachers', teacherSchema)

module.exports = Teacher

