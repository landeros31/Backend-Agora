const router = require('express').Router()
const auth = require('../middleware/auth')

const controllerDeliverie = require('../controllers/deliverie')



router.post('/new-deliverie', controllerDeliverie.create)
router.post('/new-deliverie/:id_deliverie', controllerDeliverie.addChat)
router.post('/new-deliverie/:id_deliverie', controllerDeliverie.addLink)
router.get('/get-deliveries', controllerDeliverie.getDeliveries)
router.get('/get-deliverie/:id_deliverie', controllerDeliverie.getDeliverie)
router.get('/get-deliverie-student',auth, controllerDeliverie.getDeliverieStudent)
router.get('/get-deliverie-proyect',auth, controllerDeliverie.getDeliverieProyect)


//router.patch('/update-deliverie', controllerDeliverie.updateDeliverie)



module.exports = router