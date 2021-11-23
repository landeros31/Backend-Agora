const router = require('express').Router()
const auth = require('../middleware/auth')
const controllerProject = require('../controllers/projects')



router.post('/new-project',auth, controllerProject.create)
router.get('/get-projects',auth, controllerProject.getProjects)
router.get('/get-one-project/:id',auth, controllerProject.getOneProject)



module.exports = router
