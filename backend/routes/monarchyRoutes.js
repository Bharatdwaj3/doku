const express = require('express');
const monarch = require('../models/monarchyModel');
const router=express.Router();
const {getMonarchs, getMonarch, createMonarch, updateMonarch, deleteMonarch} = require('../controllers/MOnarch.controller.js');


router.get('/', getMonarchs);
router.get("/:id", getMonarch);

router.post("/", createMonarch);

// update a MOnarch
router.put("/:id", updateMonarch);

// delete a MOnarch
router.delete("/:id", deleteMonarch);

module.exports=router;