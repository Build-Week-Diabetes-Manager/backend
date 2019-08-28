
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('manage')
    .then(function () {
      // Inserts seed entries
      return knex('manage').insert([
        { timestamp: '2019-10-10 10:10:12', code: 38, value: 33, user_id: 1 },
        { timestamp: '2019-10-10 10:10:12', code: 38, value: 33, user_id: 1 },
        { timestamp: '2019-10-10 10:10:12', code: 38, value: 33, user_id: 1 }
      ]);
    });
};