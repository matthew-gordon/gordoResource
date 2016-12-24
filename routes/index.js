'use strict';

const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

// *** GET all items *** //
router.get('/items', (req, res, next) => {
  queries.getAll()
  .then((items) => {
    res.status(200).json(items);
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;
