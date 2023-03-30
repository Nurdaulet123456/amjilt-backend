require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const post = require('./route/post')
const postAll = require('./route/postAll')
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    if(typeof(req.headers['content-type']) === 'undefined'){
        req.headers['content-type'] = "application/json; charset=UTF-8";
    }
    next();
})
.use(bodyParser.json());
app.use(cors({
    origin: "*",
    credentials: true
}))

db()

app.use('/v1/post', post)
app.use('/v1/postAll', postAll)


const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('listening on port' + PORT))