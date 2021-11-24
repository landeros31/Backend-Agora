const Deliverie = require('../db/models/deliverie')

const controllerDeleverie = {
    create: async (req, res) => {
        try{

            const {id_project} = req.params
            const { title,
                    id_user,
                    id_publisher,
                    link,
                    text} = req.body

            if( !text || !id_project || !id_publisher || !id_user )
                return res.status(400).json({msg: "Please fill in all fields."})
            
            const deliverie = new Deliverie({
                        title,
                        id_project,
                        id_user,
                        id_publisher,
                        link,
                        text,

                })
                
                const savedDeliverie = await deliverie.save()
                
                res.json({msg: "Register success! outcome created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addChat: async (req, res) => {
        try{
            const {id_deliverie} = req.params
            const {text} = req.body
       
            const deliverieUpdate = await Deliverie.findById(id_deliverie)

            deliverieUpdate.text.push(text)

            await Deliverie.replaceOne({_id:id_deliverie}, {text: deliverieUpdate.text})

            res.send('Chat Update')
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }  
    },
    addLink: async (req, res) => {
        try{
            const {id_deliverie} = req.params
            const {link} = req.body
       
            const deliverieUpdate = await Deliverie.findById(id_deliverie)

            deliverieUpdate.link.push(link)

            await Deliverie.replaceOne({_id:id_deliverie}, {link: deliverieUpdate.link})

            res.send('Link Add')
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }  
    },

    getDeliverie: async (req, res) => {
        try {
            const deliverie = await Deliverie.find({})
            
            res.json(deliverie)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    //getAll X student
    getDeliverieStudent: async (req, res) => {
        try {
            const { id_user } = req.body
            const deliverie = await Deliverie.find({ id_user })
            
            res.json(deliverie)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // getAll X Brief
    getDeliverieProyect: async (req, res) => {
        try {
            const { id_Proyecto } = req.body
            const deliverie = await Deliverie.find({ id_Proyecto })
            
            res.json(deliverie)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    //      const user = await User.findOne({ email })
    // updateDeliverie: async (req, res) => {
    //     try {
    //         const {id_deleverie, state} = req.body
    //         await Deleverie.findOneAndUpdate({_id : id_deliverie}, {
    //             state
    //         })

    //         res.json({msg: "Update Success!"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },


 
 }
    

module.exports = controllerDeleverie