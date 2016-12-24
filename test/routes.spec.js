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
      knex.migrate.latest()
      .then(() => {
        return knex.seed.run()
        .then(() => {
          done();
        });
      });
    });
  });

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
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
        res.body.length.should.equal(3);
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

  describe('GET /api/v1/shows/:id', () => {
    it('should return a single show', (done) => {
      chai.request(server)
      .get('/api/v1/items/2y')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('Hannah Carstens');
        res.body.should.have.property('email');
        res.body.email.should.equal('beautiful@themost.com');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('One luck lady married to the MAN.');
        res.body.should.have.property('admin');
        res.body.admin.should.equal(false);
        done();
      });
    });
  });

  describe('POST /api/v1/items', () => {
    it('should add an item', (done) => {
      chai.request(server)
      .post('/api/v1/items')
      .send({
        name: 'New Entry',
        email: 'new@email.com',
        bio: 'This is a new bio being added.',
        admin: false
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('New Entry');
        res.body.should.have.property('email');
        res.body.email.should.equal('new@email.com');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('This is a new bio being added.');
        res.body.should.have.property('admin');
        res.body.admin.should.equal(false);
        done();
      });
    });
  });

});
