const mongoose = require('mongoose');

const monarchySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    dod:{
        type:Date,
        required:true
    },
    alive:{
        type:Boolean,
        required:true
    },
    religion:{
        type:String,
        required:true
    }
});

const Monarch = mongoose.models.Monarch || mongoose.model('Monarch', monarchySchema, 'Monarchs');

module.exports = Monarch;