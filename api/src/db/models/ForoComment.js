const { Schema, model } = require('mongoose')

const foroSchema = new Schema ({

    id_publisher:{
        type: String,
        require: true
    },
    
    id_disscusion:{
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

    Editor_WYSIWYG:{
       type: Object
    },
    
    tag:{
    
    question: {
            type: Boolean,
    },
    
    contributions:{
            type: Boolean,
    },
    
    challenges:{
            type: Boolean,
    },
    
    Puntuation_system:{
              type: Number,
              default: 0
    },

    },
 

})


foroSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Foro = model('Foro', foroSchema)
  
  module.exports = Foro