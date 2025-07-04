const express = require('express')
const mongoose = require('mongoose');
const monarchySchema = require('../schemas/monarchySchema');

const monarch = mongoose.models.monarch || mongoose.model('monarch', monarchSchema);
module.exports=monarch;