require('dotenv').load()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const api = require('./api')
const { createServer } = require('http')
const path = require('path')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4000
const app = express()
const server = createServer(app)

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', api)

server.listen(port, host, () => {
	console.log(`Started on ${host}:${port}`)
})
