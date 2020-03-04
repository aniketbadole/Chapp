exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable.increments("user_id");
    usersTable.string("username").notNullable();
    usersTable.string("avatar_url").defaultTo("www.fakeface.com");
    usersTable.boolean("logged_in").defaultTo(true);
    usersTable.timestamp("last_log_in").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
