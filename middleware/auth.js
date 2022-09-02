
const config = process.env

const verifyToken = (req, res, next) => {
    if(req.headers.token !== config.API_TOKEN){
        return res.status(403).send({
            code: 403,
            message: "Unauthorized" 
        })
    }
    next()
} 

module.exports = verifyToken