const router = require('express').Router()
const controllerAnnuncie = require('../controllers/annuncie')



router.post('/new-annuncie', controllerAnnuncie.create)
router.get('/get-annuncies', controllerAnnuncie.getAnnuncies)
router.patch('/update-annuncie',controllerAnnuncie.updateAnnuncie)



module.exports = router
