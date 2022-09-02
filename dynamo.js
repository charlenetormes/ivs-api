const AWS = require('aws-sdk');
require('dotenv').config();
const UUID = require('uuid')

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_AKIA43Z57JT2QSZYV4O6
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = "ivs-users"

const addOrUpdateUser = async(user) => {
    user.id = UUID.v1()
    const params = {
        TableName: TABLE_NAME,
        Item: user
    }
    return await dynamoClient.put(params).promise()
}

const getUsers = async () => {
    const params = {
        TableName: TABLE_NAME
    }
    const users = await dynamoClient.scan(params).promise()
    console.log(users)
    return users
}

const getUserByID = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise()
}

const deleteUser = async(id) => {
    const params = {
        TableName: TABLE_NAME,
        Key:{
            id
        }
    }
    return await dynamoClient.delete(params).promise()
}

module.exports = {
    addOrUpdateUser,
    getUsers,
    getUserByID,
    deleteUser
}