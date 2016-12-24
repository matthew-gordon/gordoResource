'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../db/knex');

chai.use(chaiHttp);

describe('API Routes', () => {

  beforeEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      return knex.seed.run()
      .then(() => {
        done();
      });
    });
  });

  describe('GET /api/v1/items', () => {
    it('should return all items', (done) => {
      chai.request(server)
      .get('/api/v1/items')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Matt Gordon');
        res.body[0].should.have.property('email');
        res.body[0].email.should.equal('lax@lacrosse.com');
        res.body[0].should.have.property('bio');
        res.body[0].bio.should.equal('Mad Lax Bro with the illest tunes yo.');
        res.body[0].should.have.property('admin');
        res.body[0].admin.should.equal(true);
        done();
      });
    });
  });

});
