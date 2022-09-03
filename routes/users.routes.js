const express = require('express')
const router = new express.Router()

const userController = require('../controllers/users.controller')

/**
 * @swagger
 * components:
 *  schemas:
 *      Users: 
*           type: object
*           required:
*           - email
*           - name
*           properties:
*               id:
*                   type: string
*                   description: auto-generated id of the user
*               email:
*                   type: string
*                   description: email of the user
*               name:
*                   type: string
*                   description: name of the user
*           example:
*               id: someId123,
*               email: charlene.tormes@gmail.com
*               name: Charlene Tormes
 * 
 */
/** 
 * @swagger
 * /users:
 *      post:
 *          parameters:
 *              - in: header
 *                name: token
 *                schema:
 *                  type: string
 *                required: true
 *          summary: Add user to DB
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          responses:
 *              200:
 *                  description: Creates a new user
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Users'
 */
router.post('/users', userController.addUserController)

/** 
 * @swagger
 * /users:
 *      get:
 *          parameters:
 *              - in: header
 *                name: token
 *                schema:
 *                  type: string
 *                required: true
 *          summary: Returns all of the complete user details
 *          responses:
 *              200:
 *                  description: The list of the user details
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Users'
 * 
 */
router.get('/users', userController.getAllUsers)
/** 
 * @swagger
 * /users/names:
 *      get:
 *          parameters:
 *              - in: header
 *                name: token
 *                schema:
 *                  type: string
 *                required: true
 *          summary: Returns all of the users names in the DB
 *          responses:
 *              200:
 *                  description: The list of the user names in the DB
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Users'
 * 
 */
router.get('/users/names', userController.getAllUsersName)   
router.get('/users/:id', userController.getUserByID)
router.delete('/users/:id', userController.deleteUser)

module.exports = router 