var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    utils = require('../services/utils');

var WorkSchema   = new Schema({
    name: {type: String, required: true, set: generatePath},
    shortdescription: {type: String, required: true},
    path: {type: String, required: true},
    description: {type: String, required: true},
    images: [{
        title: {type: String, required: true},
        file: {type: String, required: true},
        created: { type: Date, default: Date.now }
    }],
    tags: [String],
    url: String,
    created: { type: Date },
    updated: { type: Date, default: Date.now }
});

function generatePath(name) {
    
    this.path = utils.createSlug(name);
    return name;
}

module.exports = mongoose.model('Work', WorkSchema);