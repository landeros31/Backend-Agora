const router = require('express').Router()
const auth = require('../middleware/auth')
const controllerAnnuncie = require('../controllers/annuncie')



router.post('/new-announcie',auth, controllerAnnuncie.create)
router.get('/get-announcies',auth, controllerAnnuncie.getAnnuncies)
router.patch('/update-announcie',auth,controllerAnnuncie.updateAnnuncie)



module.exports = router
