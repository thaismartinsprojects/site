coffee = require 'coffee-script/register'
express = require 'express'
bodyParser = require 'body-parser'
mongoose = require 'mongoose'
expressValidator = require 'express-validator'
config = require './config'
path = require 'path'
response = require './services/response'

app = express()
router = express.Router()

mongoose.connect config.database, (err) ->
  console.log('Error to connect mongodb: ' + err) if err

app.use (req, res, next) ->
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()

app.use (req, res, next) ->
  res.type = response.messages
  res.with = response.with
  next()
  return

app.use bodyParser.urlencoded({ extended: true })
app.use bodyParser.json()
app.use expressValidator()

router.get '/', (req, res) ->
  res.json({ message: 'You don\'t have access to this API'})

works = require './controllers/works'

app.use '/api', router
app.use '/api/works', works

app.listen config.port, () ->
  console.log('App listening on port ' + config.port)