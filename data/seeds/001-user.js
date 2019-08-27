exports.seed = function(knex) {
  return knex("users").insert([
    { username: "simba", password: "password" },
    { username: "jim", password: "bean" },
    { username: "username", password: "password" },
    { username: "username1", password: "password" },
    { username: "username2", password: "password" },
    { username: "username3", password: "password" },
    { username: "username4", password: "password" },
    { username: "username5", password: "password" },
    { username: "username6", password: "password" },
    { username: "username7", password: "password" }
  ]);
};
