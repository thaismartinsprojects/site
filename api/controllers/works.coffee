express = require 'express'
router = express.Router()
auth = require '../services/auth'
Work = require '../models/Work'
fs = require 'fs'
multer = require 'multer'
upload = multer({ 'dest': './public/uploads' })

router.get '/', auth.isAuthenticated, (req, res) ->
  Work.find (err, userFound) ->
    return res.with(res.type.dbError) if err
    if userFound then res.with(res.type.foundSuccess, userFound) else res.with(res.type.itemNotFound)

router.get '/:id', auth.isAuthenticated, (req, res) ->
  Work.find {_id: req.params._id}, (err, usersFound) ->
    return res.with(res.type.dbError) if err
    return res.with(res.type.foundSuccess, usersFound) if usersFound.length > 0
    res.with(res.type.itemNotFound)

module.exports = router