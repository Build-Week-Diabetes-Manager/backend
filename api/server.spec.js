const request = require('supertest');

 const db = require('../database/dbConfig');

 const server = require('./server');

 describe('users database', () => {
  it('tests if DB_ENV is "testing" for tests', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

   
}); 