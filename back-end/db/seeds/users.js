const userData = require("../data/index");

exports.seed = knex => {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex("users")
        .insert(userData)
        .returning("*");
    });
};
