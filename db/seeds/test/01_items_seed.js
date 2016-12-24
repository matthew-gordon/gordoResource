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
        knex('items').insert({
          id: 2,
          name: 'Hannah Carstens',
          email: 'beautiful@themost.com',
          bio: 'One luck lady married to the MAN.',
          admin: false
        }),
        knex('items').insert({
          id: 3,
          name: 'Charlie Barkles',
          email: 'woof@bigdogsyndrome.com',
          bio: 'This pup ain\'t no fluff.',
          admin: true
        })
      ])
      .then(() => {
        return knex.raw("SELECT setval('items_id_seq', (SELECT MAX(id) FROM items))");
      });
    });
};
