const router = require('express').Router()
const auth = require('../middleware/auth')

const controllerDeliverie = require('../controllers/deliverie')



router.post('/new-deliverie',auth, controllerDeliverie.create)
router.get('/get-deliverie', auth,controllerDeliverie.getDeliverie)
router.get('/get-deliverie-student',auth, controllerDeliverie.getDeliverieStudent)
router.get('/get-deliverie-proyect',auth, controllerDeliverie.getDeliverieProyect)


//router.patch('/update-deliverie', controllerDeliverie.updateDeliverie)



module.exports = router