const router = require('express').Router()
const controllerOutcome = require('../controllers/outcome')
const auth = require('../middleware/auth')




router.post('/new-outcome', controllerOutcome.create)
router.get('/get-outcome/:id_deliverie',auth, controllerOutcome.getOutcome)
router.patch('/update-outcome/:id_deliverie',auth,controllerOutcome.updateOutcome)



module.exports = router