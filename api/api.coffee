coffee = require 'coffee-script/register'
express = require 'express'
bodyParser = require 'body-parser'
mongoose = require 'mongoose'
expressValidator = require 'express-validator'
config = require './config'
path = require 'path'
cors = require 'cors'
response = require './services/response'

app = express()

mongoose.connect config.database, (err) ->
  console.log('Error to connect mongodb: ' + err) if err

app.use cors()
app.use bodyParser.urlencoded({ extended: true })
app.use bodyParser.json()
app.use expressValidator()

app.use (req, res, next) ->
  res.type = response.messages
  res.with = response.with
  next()
  return

app.use '/api', require './routes'

app.listen config.port, () ->
  console.log('App listening on port ' + config.port)