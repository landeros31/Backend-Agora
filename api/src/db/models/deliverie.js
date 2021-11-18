const { Schema, model } = require('mongoose')

const deliverieSchema = new Schema ({

    id_brief:{
        type: String,
        require: true
    },
    id_user:{
         type: String,
          require: true
      },
    id_publisher:{
       type: String,
       require: true
    },
    text:{
        type: String,
        require: true
    },
    date_publisher:{
        timestamps:true
    },
 
})


deliverieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Deliverie = model('Deliverie', deliverieSchema)
  
  module.exports = Deliverie