const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/users.routes')
const auth = require('./middleware/auth');
const app = express()
const port = process.env.PORT || 3000
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const options = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Users API",
            version: "1.0.0",
            description: "A simple NodeJS/ExpressJS Users API"
        },
        servers: [
            {
                url: "http://ec2-54-157-14-17.compute-1.amazonaws.com:3000"
            },
            {
                url: "http://localhost:3000"
            }
        ],
        
    },
    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(auth)
app.use(userRoutes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})  