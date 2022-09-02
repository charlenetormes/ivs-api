const userDB = require('../store/users')

const addUserController = async (req , res) => {
    const user = req.body
    const returnData = await userDB.addOrUpdateUser(user)
    .then((res) => {
        return {
            code: 201,
            message: "Success",
            data: user
        }
    })
    .catch((e) => {
        return {
            code: 400,
            message: "Bad Request - Error creating User"
        }   
    })

    res.status(200).send(returnData)
}

const getUserByID = async (req, res) => { 
    const userId = req.params.id 
    const returnData = await userDB.getUserByID(userId)
    .then((res) => {
        return {
            code: 404,
            message: "Success",
            data: res
        }
    })
    .catch((e) => {
        return {
            code: 404,
            message: "Not Found - User does not exist"
        }
    })

    res.status(returnData.code).send(returnData)
}

const getAllUsers = async (req, res) => {
    const returnData = await userDB.getUsers()
    .then((res) => {
        return {
            code: 200,
            message: "Success",
            data: res
        }
    })
    .catch((e) => {
        return {
            code: 400,
            message: "Bad Request - Error getting Users"
        }  
    })

    res.status(returnData.code).send(returnData)
}

const deleteUser = async (req, res) => {
    const userId = req.params.id
    const returnData = await userDB.deleteUser(userId)
    .then((res) => {
        return {
            code: 200,
            message: `Successfully deleted userId: ${userId}`
        }
    })
    .catch((e) => {
        return {
            code: 404,
            message: e.message
        }
    })

    res.status(returnData.code).send(returnData)
    
}

module.exports = {
    addUserController,
    getUserByID,
    getAllUsers,
    deleteUser
}