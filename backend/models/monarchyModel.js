const express = require('mongoose');
const monarchySchema = require('../schemas/monarchySchema');
const { default: mongoose } = require('mongoose');

const monarch=mongoose.model('monarch',monarchySchema);

module.exports=monarch;