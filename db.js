const Pool = require("pg").Pool;

module.exports = function createDatabase() {
  const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "limmy",
    password: "password",
    port: "5432",
  });
  pool.query(
    "CREATE TABLE question(qid SERIAL PRIMARY KEY,content text NOT NULL,optionZero VARCHAR(250) NOT NULL,optionOne VARCHAR(250) NOT NULL, salt VARCHAR(10),result INTEGER,startDate date,endDate date)",
    (err, res) => {
      if (err) {
        console.log("Tables already created");
        return;
      }
      pool.query(
        "CREATE TABLE votes(address VARCHAR(50) NOT NULL, option INTEGER NOT NULL,unix VARCHAR(50) NOT NULL, salt VARCHAR(10) NOT NULL, qid INTEGER NOT NULL, FOREIGN KEY (qid) REFERENCES question ON DELETE CASCADE ON UPDATE CASCADE)",
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
      );
    }
  );
};
