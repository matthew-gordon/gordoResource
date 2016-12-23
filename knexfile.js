'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gordo_dev',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/gordo_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrtions'
    },
    seeds: {
      directory: __dirname + 'db/seeds/production'
    }
  }

};
