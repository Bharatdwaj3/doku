const express = require('express');
const monarch = require('../models/monarchyModel');
const router=express.Router();
const {getMonarchs, getMonarch, createMonarch, updateMonarch, deleteMonarch} = require('../controllers/monarchController.js');


router.get('/', getMonarchs);
router.get("/:id", getMonarch);
router.post("/", createMonarch);
router.put("/:id", updateMonarch);
router.delete("/:id", deleteMonarch);

module.exports=router;