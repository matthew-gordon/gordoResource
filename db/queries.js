'use strict';

const knex = require('./knex');

function Items() {
  return knex('items');
}

// *** queries *** //

function getAll() {
  return Items().select();
}

module.exports = {
  getAll: getAll
};
