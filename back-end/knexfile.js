const config = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  },
  connection: { database: "chapp" }
};

module.exports = config;
