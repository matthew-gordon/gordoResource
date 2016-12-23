'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('items').insert({
          id: 1,
          name: 'Matt Gordon',
          email: 'lax@lacrosse.com',
          bio: 'Mad Lax Bro with the illest tunes yo.',
          admin: true
        }),
      ]);
    });
};
