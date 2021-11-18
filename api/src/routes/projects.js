const router = require('express').Router()
const controllerProject = require('../controllers/projects')



router.post('/new-project', controllerProject.create)
router.get('/get-projects', controllerProject.getProjects)
router.get('/get-one-project', controllerProject.getOneProject)



module.exports = router
