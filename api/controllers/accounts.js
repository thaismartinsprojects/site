var express = require('express'),
    router = express.Router(),
    auth = require('../auth'),
    User = require ('../models/User');

router.get('/', auth.isAuthenticated, function(req, res) {

    User.find(function(err, usersFound) {

        if(err) return res.message(res.type.dbError, err);

        if(usersFound) res.message(res.type.foundSuccess, usersFound);
        else res.message(res.type.itemsNotFound);
    });
});

router.post('/', function(req, res) {

    User.findOne({email: req.body.email}, function(err, userFound) {

        if(userFound) return res.message(res.type.itemExists);

        var user = new User(req.body);
        user.save(function(err) {
            if(err) res.message(res.type.dbError, err);
            else res.message(res.type.createSuccess, user);
        });
    });
});

router.post('/auth', function(req, res) {

    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('user', 'User is required').notEmpty();

    var errors = req.validationErrors(true);
    if(errors) return res.message(res.type.fieldsMissing, {'errors': errors});

    var user = new User(req.body);
    User.findOne({user: req.body.user}, function(err, userFound) {
        if(!userFound) return res.message(res.type.itemNotFound);

        if (user.comparePassword(req.body.password)) {
            var token = user.generateToken(userFound);
            return res.message(res.type.loginSuccess, {'token': token});
        } else return res.message(res.type.wrongPassword);
    });
});

module.exports = router;