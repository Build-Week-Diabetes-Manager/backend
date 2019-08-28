const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'rowValue1', password: bcrypt.hashSync("bean", 10) },
        { username: 'rowValue2', password: bcrypt.hashSync("bean", 10) },
        { username: 'rowValue3', password: bcrypt.hashSync("bean", 10) }
      ]);
    });
};
