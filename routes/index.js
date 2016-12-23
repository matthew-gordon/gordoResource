'use strict';

const express = require('express');
const router = express.Router();

// *** GET all items *** //
router.get('/items', (req, res, next) => {
  res.send('send items back');
});

module.exports = router;
