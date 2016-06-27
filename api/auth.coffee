jwt = require 'jsonwebtoken'
config = require './config'

module.exports =
  isAuthenticated: (req, res, next) ->

    token = req.headers['x-access-token']

    if token
      jwt.verify token, config.jwt.secret, (err, decoded) ->
        if err
          return res.json({
            success: false,
            message: 'Failed to authenticate token.'
          })
        else
          req.decoded = decoded
          next()
    else
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      })