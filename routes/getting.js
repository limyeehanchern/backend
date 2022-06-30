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

router.get("/currentquestion", (req, res) => {
  const { qid } = req.query;
  pool.query(
    `SELECT content, optionZero, optionOne FROM question WHERE qid = ${qid};`,
    (err, tup) => {
      if (err) {
        console.log(err);
        console.log("Query error");
        return;
      }
      res.status(201).send(tup.rows[0]);
    }
  );
});

router.get("/currentsalt", (req, res) => {
  const { qid } = req.query;
  pool.query(`SELECT salt FROM question WHERE qid = ${qid};`, (err, tup) => {
    if (err) {
      console.log("Query error");
      return;
    }
    res.status(201).send(tup.rows[0]);
  });
});

router.get("/gethistory", (req, res) => {
  const { qid } = req.query;
  pool.query(
    `SELECT content, optionZero, optionOne, result FROM question WHERE qid != ${qid} ORDER BY qid DESC;`,
    (err, tup) => {
      if (err) {
        console.log("Query error");
        return;
      }
      res.status(201).send(tup.rows);
    }
  );
});

module.exports = router;
