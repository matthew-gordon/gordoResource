'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', (items) => {
    items.increments();
    items.text('name').notNullable().unique();
    items.text('email').notNullable();
    items.text('bio').notNullable();
    items.boolean('admin').defaultTo(false);
    items.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
