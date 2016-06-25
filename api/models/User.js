var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    config = require('../config'),
    salt = bcrypt.genSaltSync(10);

var UserSchema   = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    user: {type: String, required: true},
    password: {type: String, required: true, set: generatePassword},
    created: { type: Date, default: Date.now }
});

function generatePassword(password) {
    
    return bcrypt.hashSync(password, salt);
}

UserSchema.methods.comparePassword = function(password) {

    if(!this.password) return false;
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateToken = function() {

    if(!this.password) return false;
    return jwt.sign(
        {'user': this.user, 'email': this.email, 'name': this.name},
        config.jwt.secret,
        {expiresIn: config.jwt.expires});
};

module.exports = mongoose.model('User', UserSchema);