const connection = require("../db/connection");

exports.fetchUsers = () => {
  return connection
    .select("*")
    .from("users")
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
