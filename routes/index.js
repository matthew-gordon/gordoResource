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

// *** GET single item *** //
router.get('/items/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((item) => {
    res.status(200).json(item);
  })
  .catch((error) => {
    next(error);
  });
});

// *** POST add show *** //
router.post('/items', (req, res, next) => {
  queries.add(req.body)
  .then((itemID) => {
    return queries.getSingle(itemID);
  })
  .then((item) => {
    res.status(200).json(item);
  })
  .catch((error) => {
    next(error);
  });
});

// *** PUT update item *** //
router.put('/items/:id', (req, res, next) => {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  queries.update(req.params.id, req.body)
  .then(() => {
    return queries.getSingle(req.params.id);
  })
  .then((item) => {
    res.status(200).json(item);
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;
