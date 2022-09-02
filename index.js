const express = require('express')
const userRoutes = require('./routes/users.routes')
const auth = require('./middleware/auth');
const app = express()
const cors = require(cors())
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(auth)
app.use(userRoutes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})  