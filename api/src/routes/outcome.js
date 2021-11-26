const router = require('express').Router()
const controllerOutcome = require('../controllers/outcome')
const auth = require('../middleware/auth')




router.post('/new-outcome',auth, controllerOutcome.create)
router.get('/get-outcome/:id_deliverie',auth, controllerOutcome.getOutcome)
router.get('/get-outcome-dash/:cohorte', controllerOutcome.getOutcomeDash)
router.patch('/update-outcome/:id_deliverie',auth,controllerOutcome.updateOutcome)



module.exports = router