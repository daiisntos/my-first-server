const mongoose = require('mongoose');

const schemeWoman = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        },
    image:{
        type: String,
        require: true,
        },
    minibio:{
        type: String,
        require: true,
        },
    quote:{
        type: String,
        require: true,
        }
    
})

module.exports = mongoose.model('diva',schemeWoman);