'use strict';

const express = require('express');
const router = express.Router();

// *** GET ll shows *** //
router.get('/shows', (req, res, next) => {
  res.send('send items back');
});
