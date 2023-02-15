const express = require('express');

const router = express.Router();

const indexController = require('./index.controller');

router.get('/',indexController.getHome);

router.get('/home',indexController.getHome);

module.exports = router;