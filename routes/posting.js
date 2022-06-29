const express = require("express");
const router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "limmy",
  password: "password",
  port: "5432",
});

router.post("/submitvote", (req, res) => {
  const { address, option, unix, salt, qid } = req.body;
  pool.query(
    `INSERT INTO votes (address, option, unix, salt, qid) VALUES ( '${address}', ${option}, '${unix}', '${salt}', ${qid});`,
    (err, res) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
      console.log("added to database");
    }
  );
});

module.exports = router;
