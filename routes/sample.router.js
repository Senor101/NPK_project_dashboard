const express = require('express');

const router = express.Router();

const sampleController = require('./sample.controller.js')

router.get('/',sampleController.getAllSample);

router.get('/:id',sampleController.getSample);

router.post('/:id',sampleController.deleteSample);

module.exports = router;