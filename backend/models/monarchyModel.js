const express = require('express')
const mongoose = require('mongoose');
const monarchySchema = require('../schemas/monarchyScheman');

const Monarch = mongoose.models.Monarch || mongoose.model('Monarch', monarchScheman);
module.exports=Monarch;