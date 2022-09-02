const express = require('express')
const userRoutes = require('./routes/users.routes')
const auth = require('./middleware/auth');
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(auth)
app.use(userRoutes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})