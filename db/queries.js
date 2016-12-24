'use strict';

const knex = require('./knex');

function Items() {
  return knex('items');
}

// *** queries *** //

function getAll() {
  return Items().select();
}

function getSingle(itemID) {
  return Items().where('id', parseInt(itemID)).first();
}

function add(item) {
  return Items().insert(item, 'id');
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add
};
