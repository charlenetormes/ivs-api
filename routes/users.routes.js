const express = require('express')
const router = new express.Router()

const userController = require('../controllers/users.controller')

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserByID)
router.post('/users', userController.addUserController)
router.delete('/users/:id', userController.deleteUser)

module.exports = router 