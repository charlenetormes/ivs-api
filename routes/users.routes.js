const express = require('express')
const router = new express.Router()

const userController = require('../controllers/users.controller')

router.post('/users', userController.addUserController)
router.get('/users', userController.getAllUsers)
router.get('/users/names', userController.getAllUsersName)   
router.get('/users/:id', userController.getUserByID)
router.delete('/users/:id', userController.deleteUser)

module.exports = router 