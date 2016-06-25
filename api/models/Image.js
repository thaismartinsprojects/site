var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema   = new Schema({
    title: {type: String, required: true},
    file: {type: String, required: true},
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', ImageSchema);