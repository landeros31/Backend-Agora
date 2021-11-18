const router = require('express').Router()
const controllerUser = require('../controllers/user')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/register', controllerUser.register)

router.post('/activation', controllerUser.activateEmail)

router.post('/login', controllerUser.login)

router.post('/refresh_token', controllerUser.getAccessToken)

router.post('/forgot', controllerUser.forgotPassword)

router.post('/reset', auth, controllerUser.resetPassword)

router.get('/info', auth, controllerUser.getUserInfor)

router.get('/all_info', auth, authAdmin, controllerUser.getUsersAllInfor)

router.get('/logout', controllerUser.logout)

router.patch('/update', auth, controllerUser.updateUser)

router.patch(
  '/update_role/:id',
  auth,
  authAdmin,
  controllerUser.updateUsersRole
)

router.delete('/delete/:id', auth, authAdmin, controllerUser.deleteUser)

module.exports = router
