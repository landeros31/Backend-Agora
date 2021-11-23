const { Schema, model } = require('mongoose')

const outcomeSchema = new Schema ({

    id_deliverie:{
        type: String,
        require: true,
      },
  outcomes: {
    type: Array,
    require: true,
},
    result: {
      type: Array,
      require: true,
    },
})

outcomeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Outcome = model('Outcome', outcomeSchema)
  
  module.exports = Outcome