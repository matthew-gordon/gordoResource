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

function update(itemID, updates){
  return Items().where('id', parseInt(itemID)).update(updates);
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update
};
