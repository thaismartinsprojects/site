var express = require('express'),
    router = express.Router(),
    auth = require('../auth'),
    Work = require ('../models/Work'),
    fs = require('fs'),
    multer = require('multer'),
    upload = multer({ dest: './public/uploads' });

router.get('/', auth.isAuthenticated, function(req, res) {

    Work.find(function(err, usersFound) {

        if(err) return res.message(res.type.dbError, err);

        if(usersFound.length > 0) res.message(res.type.foundSuccess, usersFound);
        else res.message(res.type.itemsNotFound);
    });
});

router.post('/', upload.array('images'), function(req, res) {

    var work = new Work(req.body),
        images = [];

    var d = Promise.defer();
    if(req.files) {
        var newPath = './public/images/works/' + work.path + '/';
        if(!fs.existsSync(newPath)) fs.mkdirSync(newPath, '0766');

        req.files.forEach(function(file) {
            fs.rename(file.path, newPath + file.filename, function (err) {
                if (!err) images.push(file.filename);
            });
        });
    } else d.resolve();

    work.images = images;
    work.created = new Date();

    work.save(function(err) {
        if(err) res.message(res.type.dbError, err);
        else res.message(res.type.createSuccess, work);
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