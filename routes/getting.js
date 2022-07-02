const express = require("express");
const router = express.Router();
const pool = require("./pool");

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

router.get("/history", (req, res) => {
  const { qid } = req.query;
  pool.query(
    `SELECT content, optionZero, optionOne, result FROM question WHERE qid < ${qid} ORDER BY qid DESC;`,
    (err, tup) => {
      if (err) {
        console.log(err);
        console.log("Query error");
        return;
      }
      res.status(201).send(tup.rows);
    }
  );
});

module.exports = router;
