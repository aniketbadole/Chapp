const { fetchUsers, fetchUserById } = require("../models/users.model");

exports.getUsers = (req, res, next) => {
  fetchUsers()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(console.log);
};

exports.getUserById = (req, res, next) => {
  const { user_id } = req.params;
  fetchUserById(user_id)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(console.log);
};
