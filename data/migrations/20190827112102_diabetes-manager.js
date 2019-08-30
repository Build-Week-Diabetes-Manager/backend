exports.up = function(knex, Promise) {
    return knex.schema.createTable("manage", manage => {
      manage.increments();
      manage.datetime("timestamp").notNullable();
      manage.integer("code").notNullable();
      manage.float("value").notNullable();
      manage.integer("user_id").unsigned();
      manage
        .foreign("user_id")
        .references("id")
        .on("users");
    });
  };
  
  //DROP IF EXISTS ⬇︎
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("manage");
  };
  