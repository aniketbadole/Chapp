const connection = require("../db/connection");

exports.fetchUsers = logged_in => {
  return connection
    .select("*")
    .from("users")
    .modify(query => {
      if (logged_in) {
        query.where({ logged_in });
      }
    })
    .then(users => {
      return { users };
    });
};

exports.fetchUserById = user_id => {
  return connection
    .select("*")
    .from("users")
    .where({ user_id }) // I may be wrong about this
    .then(user => user);
};
