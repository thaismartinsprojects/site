var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    expressValidator = require('express-validator'),
    config = require('./config'),
    path = require('path'),
    response = require('./services/response');

var app = express(),
    router = express.Router();

mongoose.connect(config.database, function(err) {
    if(err) console.log('Error to connect mongodb:' + err);
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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

var accounts = require('./controllers/accounts'),
    works = require('./controllers/works');

app.use('/api', router);
app.use('/api/account', accounts);
app.use('/api/works', works);

app.listen(config.port, function () {
    console.log('App listening on port ' + config.port);
});