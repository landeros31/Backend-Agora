const Annuncie = require('../db/models/annuncie')


const controllerAnnuncie = {
    create: async (req, res) => {
        try{
            const {id_user, text,name_annuncie,estado} = req.body

            if(!text || !name_annuncie )
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const annuncie = new Annuncie({
                    
                    id_user,
                    text,
                    name_annuncie,
                    estado
                    
                    
                  })
                
                  const savedAnnuncie = await annuncie.save()
                
                 res.json({msg: "Register success! annuncie created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getAnnuncies: async (req, res) => {
        try {
            const annuncies = await Annuncie.find({})
            
            res.json(annuncies)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateAnnuncie: async (req, res) => {
        try {
            const {id_annuncie, state} = req.body
            await Annuncie.findOneAndUpdate({_id : id_annuncie}, {
                state
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
 
}
    

module.exports = controllerAnnuncie