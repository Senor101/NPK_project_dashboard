const express = require('express');

const router = express.Router();

router.get('/sample',getAllSample);

router.get('/sample/:id',getSample);

module.exports = router;