const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/users.routes')
const auth = require('./middleware/auth');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

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