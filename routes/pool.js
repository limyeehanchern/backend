const Pool = require("pg").Pool;

module.exports = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "limmy",
  password: "password",
  port: "5432",
});
