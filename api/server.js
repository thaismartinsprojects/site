var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    expressValidator = require('express-validator'),
    config = require('./config'),
    response = require('./services/response');

var app = express(),
    router = express.Router();

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(function(req, res, next) {
    res.type = response.messages;
    res.message = response.with;
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'You don\'t have access to this API'});
});

var accounts = require('./controllers/accounts');

app.use('/api', router);
app.use('/api/account', accounts);

app.listen(config.port, function () {
    console.log('App listening on port ' + config.port);
});