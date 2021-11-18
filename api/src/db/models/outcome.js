const { Schema, model } = require('mongoose')

const outcomeSchema = new Schema ({

    id_deliverie:{
        type: String,
        require: true,
      },
  outcome: {
    outcome1:{
        type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
        default: 0

    },
    outcome2:{
      type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
      default: 0

  },
  outcome3:{
    type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
    default: 0

  },
  outcome4:{
    type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
    default: 0

  }, outcome5:{
    type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
    default: 0

  }, outcome6:{
    type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
    default: 0
  },  
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