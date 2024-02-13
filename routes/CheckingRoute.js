const router = require('express').Router()
const CheckingController = require('../controllers/CheckingController')

router.get('/user/:id', CheckingController.checking)
router.get('/:id', CheckingController.getCheckingById)
router.get('/', CheckingController.getAllCheckings)
router.patch('/:id', CheckingController.updateCheckinById)
// router.delete('/:id', UserController.deleteuserById)
module.exports = router
